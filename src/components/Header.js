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
            <div class="logo">
                {/* <img src="img/devjane.png" alt="" /> */}
            </div>
            <button class="nav-toggle" aria-label="toggle navigation" onClick={toggleNav}>
                <span class="hamburger"></span>
            </button>
            <nav class="nav">
                <ul class="nav__list">
                    <li class="nav__item"><a href="#home" class="nav__link" onClick={resetNavToggle}>Home</a></li>
                    <li class="nav__item"><a href="#services" class="nav__link" onClick={resetNavToggle}>My Services</a></li>
                    <li class="nav__item"><a href="#about" class="nav__link" onClick={resetNavToggle}>About me</a></li>
                    <li class="nav__item"><a href="#work" class="nav__link" onClick={resetNavToggle}>My Work</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
