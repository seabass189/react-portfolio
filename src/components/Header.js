import React, {useState} from 'react';

function Header() {
    const [navToggle, setNavToggle] = useState(false);

    function toggleNav() {
        setNavToggle(prev => !prev);
    }

    function resetNavToggle() {
        setNavToggle(false);
    }

    return (
        <header className={navToggle ? 'nav-open' : ''}>
            <div className="logo">
                {/* <img src="img/devjane.png" alt="" /> */}
            </div>
            <button className="nav-toggle" aria-label="toggle navigation" onClick={toggleNav}>
                <span className="hamburger"></span>
            </button>
            <nav className="nav">
                <ul className="nav__list">
                    <li className="nav__item"><a href="#home" className="nav__link" onClick={resetNavToggle}>Home</a></li>
                    <li className="nav__item"><a href="#services" className="nav__link" onClick={resetNavToggle}>My Services</a></li>
                    <li className="nav__item"><a href="#about" className="nav__link" onClick={resetNavToggle}>About me</a></li>
                    <li className="nav__item"><a href="#work" className="nav__link" onClick={resetNavToggle}>My Work</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
