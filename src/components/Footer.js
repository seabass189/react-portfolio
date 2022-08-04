import React from 'react';

function Footer() {
    return (
        <footer className="footer">
            {/* replace with your own email address */}
            <a href="mailto:sebash189@gmail.com" className="footer__link">sebash189@gmail.com</a>
            <ul className="social-list">
                <li className="social-list__item">
                    <a className="social-list__link" href="https://www.linkedin.com/in/sebastian-hernandez-b99b5511b/">
                        <i className="fa-brands fa-linkedin"></i>
                    </a>
                </li>
                {/* <li className="social-list__item">
                    <a className="social-list__link" href="http://dribbble.com">
                        <i className="fab fa-dribbble"></i>
                    </a>
                </li>
                <li className="social-list__item">
                    <a className="social-list__link" href="https://twitter.com">
                        <i className="fab fa-twitter"></i>
                    </a>
                </li> */}
                <li className="social-list__item">
                    <a className="social-list__link" href="https://github.com/seabass189">
                        <i className="fab fa-github"></i>
                    </a>
                </li>
            </ul>
        </footer>
    );
}

export default Footer;
