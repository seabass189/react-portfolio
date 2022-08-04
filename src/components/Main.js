import React from 'react';
import headshot from '../assets/sebastian.jpg';

function Main() {
    return (
        <>
            {/* Introduction */}
            <section className="intro" id="home">
                <h1 className="section__title section__title--intro">
                    Hi, I am <strong>Sebastian<br/>Hernandez</strong>
                </h1>
                <p className="section__subtitle section__subtitle--intro">front-end dev</p>
                <img src={headshot} alt="Sebastian Hernandez smiling" className="intro__img"/>
            </section>
            
            
            {/* My services */}
            <section className="my-services" id="services">
                <h2 className="section__title section__title--services">What I do</h2>
                <div className="services">
                    <div className="service">
                        <h3>Design + Development</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div> {/* / service */}
                    
                    <div className="service">
                        <h3>E-Commerce</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div> {/* / service */}
                    
                    <div className="service">
                        <h3>WordPress</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div> {/* / service */}
                </div> {/* / services */}
                
                <a href="#work" className="btn">My Work</a>
            </section>
            
            
            {/* About me */}
            <section className="about-me" id="about">
            <h2 className="section__title section__title--about">Who I am</h2>
            <p className="section__subtitle section__subtitle--about">Designer & developer based out of NYC</p>
            
            <div className="about-me__body">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
            
            <img src="img/dev-jane-02.jpg" alt="Jane leaning against a bus" className="about-me__img"/>
            </section>
            
            {/* My Work */}
            <section className="my-work" id="work">
                <h2 className="section__title section__title--work">My work</h2>
                <p className="section__subtitle section__subtitle--work">A selection of my range of work</p>
                
                <div className="portfolio">
                    {/* Portfolio item 01 */}
                    <a href="portfolio-item.html" className="portfolio__item">
                        <img src="img/portfolio-01.jpg" alt="" className="portfolio__img"/>
                    </a>
                    
                    {/* Portfolio item 02 */}
                    <a href="portfolio-item.html" className="portfolio__item">
                        <img src="img/portfolio-02.jpg" alt="" className="portfolio__img"/>
                    </a>
                </div>
            </section>
        </>
    );
}

export default Main;
