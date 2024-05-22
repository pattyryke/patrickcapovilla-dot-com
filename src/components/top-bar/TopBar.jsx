import Title from "./Title";


const TopBar = () => {

    const handleLinkedIn = () => {
        window.open("https://www.linkedin.com/in/patrick-capovilla/");
    };
    const handleGithub = () => {
        window.open("https://github.com/pattyryke");
    };
    const handleDiscord = () => {
        window.open("https://www.discordapp.com/users/129379182366031872");
    };
    return (
        <div className="top-bar">
            <div className="contact-me-column">
                <ul className="social-media-list outline-text">
                    <li>
                        <div className="circle">
                            <img src="linkedin-50.png" onClick={handleLinkedIn} />
                        </div>
                    </li>
                    <li>
                        <div className="circle">
                            <img src="github-50.png" onClick={handleGithub} />
                        </div>
                    </li>
                    <li>
                        <div className="circle">
                            <img src="discord-50.png" onClick={handleDiscord} />
                        </div>
                    </li>
                </ul>
                <p>iam@patrickcapovilla.com</p>
                <p>(805)-896-1422</p>
            </div>
            <div className="title-container">
                <Title />
            </div>
        </div>
    );
};

export default TopBar;