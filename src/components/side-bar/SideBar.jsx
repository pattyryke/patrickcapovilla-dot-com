import { useState } from "react";


function SideBar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div id="menu" className="menu">
            <div className="title header-font">MENU</div>
            <ul className="nav">
                <li>HOME</li>
                <li>ABOUT</li>
                <li>SHOWCASE</li>
                <li>CONTACT</li>
            </ul>
        </div>
    );
}

export default SideBar;