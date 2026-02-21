const state = {
	ambience: { activeBtn: null, audio: null, ytId: null, name: null, volume: 0.2 },
	music: { activeBtn: null, audio: null, ytId: null, name: null, volume: 0.5 },
};

// Load the API once
const tag = document.createElement('script');
tag.src = 'https://www.youtube.com/iframe_api';
document.head.appendChild(tag);

// Store player objects
const ytPlayers = { ambience: null, music: null };

// Called automatically by the API when ready
window.onYouTubeIframeAPIReady = function () {
	['ambience', 'music'].forEach((channel) => {
		ytPlayers[channel] = new YT.Player('yt-' + channel, {
			height: '1',
			width: '1',
			playerVars: { autoplay: 0, controls: 0 },
		});
	});
};

function getYtId(url) {
	url = url.trim();
	const match = url.match(/(?:v=|youtu\.be\/|embed\/)([a-zA-Z0-9_-]{11})/);
	return match ? match[1] : url.length === 11 ? url : null;
}

function setYtSrc(channel, ytId) {
	ytPlayers[channel].loadVideoById({ videoId: ytId });
	ytPlayers[channel].setVolume(state[channel].volume * 100);
}

function clearYt(channel) {
	ytPlayers[channel].stopVideo();
}

function updateUI(channel, name) {
	const nameEl = document.getElementById(channel + '-name');
	const pulse = document.getElementById(channel + '-pulse');
	if (name) {
		nameEl.textContent = name;
		nameEl.classList.remove('empty');
		pulse.classList.remove('inactive');
	} else {
		nameEl.textContent = 'Nothing playing';
		nameEl.classList.add('empty');
		pulse.classList.add('inactive');
	}
}

function stopChannel(channel) {
	const s = state[channel];
	if (s.audio) {
		s.audio.pause();
		s.audio = null;
	}
	clearYt(channel);
	if (s.activeBtn) {
		s.activeBtn.classList.remove('active', 'music-active');
		s.activeBtn = null;
	}
	s.name = null;
	updateUI(channel, null);
}

function playSound(sound, btn) {
	const channel = sound.channel;
	stopChannel(channel);
	setYtSrc(channel, sound.yt, sound.loop);
	state[channel].activeBtn = btn;
	state[channel].name = sound.name;
	btn.classList.add(channel === 'music' ? 'music-active' : 'active');
	updateUI(channel, sound.name);
	fadeIn(channel, state[channel].volume);
}

function playYoutube(channel) {
	const url = document.getElementById('yt-url').value;
	const id = getYtId(url);
	if (!id) {
		alert('Invalid YouTube URL or ID');
		return;
	}
	stopChannel(channel);
	setYtSrc(channel, id, true);
	state[channel].name = 'YouTube: ' + id;
	updateUI(channel, state[channel].name);
	fadeIn(channel, state[channel].volume);
}

function setVolume(channel, val) {
	state[channel].volume = parseFloat(val);
	if (state[channel].audio) state[channel].audio.volume = parseFloat(val);
	if (ytPlayers[channel]) ytPlayers[channel].setVolume(val * 100);
}

function playLocalFile(input) {
	const file = input.files[0];
	if (!file) return;
	const channel = document.getElementById('file-channel').value;
	stopChannel(channel);
	const url = URL.createObjectURL(file);
	const audio = new Audio(url);
	audio.loop = true;
	audio.volume = state[channel].volume;
	audio.play();
	state[channel].audio = audio;
	state[channel].name = file.name;
	updateUI(channel, file.name);
	input.value = '';
}

// Fade in function
function fadeIn(channel, targetVolume, duration = 10000) {
	const steps = 40;
	const interval = duration / steps;
	const increment = targetVolume / steps;
	let current = 0;

	const timer = setInterval(() => {
		current = Math.min(current + increment, targetVolume);

		if (ytPlayers[channel]) ytPlayers[channel].setVolume(current * 100);
		if (state[channel].audio) state[channel].audio.volume = current;

		if (current >= targetVolume) clearInterval(timer);
	}, interval);
}

// Build the grid
function buildUI(SOUNDS) {
	const board = document.getElementById('soundboard');
	const categories = [...new Set(SOUNDS.map((s) => s.category))];

	const catIcons = {
		'Tavern / Inn': '🍺',
		'Forest / Nature': '🌲',
		'Dungeon / Cave': '🕯',
		'Combat / Battle': '⚔️',
		'Town / Market': '🏘',
		'Spooky / Horror': '👻',
		// 'Epic / Dramatic': '✨',
	};

	categories.forEach((cat) => {
		const sounds = SOUNDS.filter((s) => s.category === cat);
		const section = document.createElement('div');
		section.className = 'category';
		section.innerHTML = `
      <div class="category-header">
        <span class="category-icon">${catIcons[cat] || '🎵'}</span>
        <span class="category-title">${cat}</span>
        <div class="category-line"></div>
      </div>
      <div class="sounds-grid"></div>
    `;
		const grid = section.querySelector('.sounds-grid');
		sounds.forEach((sound) => {
			const btn = document.createElement('button');
			btn.className = 'sound-btn';
			btn.innerHTML = `
        <span class="sound-icon">${sound.icon}</span>
        <span class="sound-name">${sound.name}</span>
        <span class="sound-type">${sound.channel}</span>
      `;
			btn.onclick = () => playSound(sound, btn);
			grid.appendChild(btn);
		});
		board.appendChild(section);
	});
}

// Format seconds as m:ss
function formatTime(seconds) {
	const m = Math.floor(seconds / 60);
	const s = Math.floor(seconds % 60)
		.toString()
		.padStart(2, '0');
	return `${m}:${s}`;
}

// Seek when user drags scrubber
function scrub(channel, value) {
	const player = ytPlayers[channel];
	if (!player || typeof player.seekTo !== 'function') return;
	const duration = player.getDuration();
	if (duration > 0) player.seekTo((value / 100) * duration, true);
}

// Poll both channels every second to update scrubbers
setInterval(() => {
	['ambience', 'music'].forEach((channel) => {
		const player = ytPlayers[channel];
		if (!player || typeof player.getPlayerState !== 'function') return;
		if (player.getPlayerState() !== YT.PlayerState.PLAYING) return;

		const current = player.getCurrentTime();
		const duration = player.getDuration();
		if (duration <= 0) return;

		document.getElementById(channel + '-current').textContent = formatTime(current);
		document.getElementById(channel + '-duration').textContent = formatTime(duration);
		document.getElementById(channel + '-scrubber').value = (current / duration) * 100;
	});
}, 1000);
