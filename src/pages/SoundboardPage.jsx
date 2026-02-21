import { useNavigate } from 'react-router-dom';
import NormalButton from '../components/common-elements/NormalButton';

const SoundboardPage = () => {
	const navigate = useNavigate();

	return (
		<div className='soundboard-page'>
			<NormalButton
				className='btn body-font back-btn'
				label='← Back'
				handleClick={() => navigate('/')}
			/>
			<h1 className='header-font outline-text-thick'>DnD Soundboard</h1>
			<p className='body-font'>A soundboard application for Dungeons &amp; Dragons sessions.</p>
		</div>
	);
};

export default SoundboardPage;
