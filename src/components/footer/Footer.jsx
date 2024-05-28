const Footer = () => {

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
        <div className="contact-me">
            <div className="text">
                <p className="outline-text">iam@patrickcapovilla.com</p>
                <p className="outline-text">(805)-896-1422</p>
            </div>
            <div className="icons">
                <ul className="icon-list outline-text">
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
            </div>
        </div>
    );
};

export default Footer;