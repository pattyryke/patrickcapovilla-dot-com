import NormalButton from "../common-elements/NormalButton";


const TopBar = () => {
    return (
        <div className="top-bar">
            <div className="social-btn-container">
                <NormalButton className="social-btn" label={"LI"} />
                <NormalButton className="social-btn" label={"GH"} />
                <NormalButton className="social-btn" label={"DIS"} />
            </div>
            <div className="top-bar-title retro title-font" id="title">
                <h2 className='title'>PatrickCapovilla.COM</h2>
            </div>
            <div className="navigation">
                <NormalButton className="nav-btn" label={"..."} />
            </div>
        </div>
    );
};

export default TopBar;