import React, {useState} from 'react';
import { Link } from 'react-router-dom';

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
                    <li className="nav__item"><Link to='/#home' className="nav__link" onClick={resetNavToggle}>Home</Link></li>
                    <li className="nav__item"><Link to='/#services' className="nav__link" onClick={resetNavToggle}>My Services</Link></li>
                    <li className="nav__item"><Link to='/#about' className="nav__link" onClick={resetNavToggle}>About me</Link></li>
                    <li className="nav__item"><Link to='/#work' className="nav__link" onClick={resetNavToggle}>My Work</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
