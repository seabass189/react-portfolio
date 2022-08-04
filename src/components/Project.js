import React from 'react';
import { useParams } from 'react-router-dom';

function Project() {
    window.scrollTo(0,0);
    const {id} = useParams()
    console.log('id', id);
    //todo: load the project info
    const proj = {
        title: 'Project long', 
        title2: 'Title long',
        subtitle: 'A short subtitle', 
        img: "https://i.natgeofe.com/n/4f5aaece-3300-41a4-b2a8-ed2708a0a27c/domestic-dog_thumb_4x3.jpg", 
        subImg: "https://i.natgeofe.com/n/3faa2b6a-f351-4995-8fff-36d145116882/domestic-dog_16x9.jpg", 
        desc1: 'Desc line numero uno foo', 
        desc2: 'Desc line numero dos foo', 
        desc3: 'Desc line numero tres foo', 
        githubLink: 'https://github.com/seabass189/dice-game'}
    return (
        <>
            <section class="intro">
                <h1 class="section__title section__title--intro">
                    {proj.title}<strong>{proj.title2}</strong>
                </h1>
                <p class="section__subtitle section__subtitle--intro">{proj.subtitle}</p>
                <img src={proj.img} alt="" class="intro__img"/>
            </section>
            
            <div class="portfolio-item-individual">
                <p>{proj.desc1}</p>
                <img src={proj.subImg} alt=""/>
                <p>{proj.desc2}</p>
                <p>{proj.desc3}</p>
                <a className="social-list__link" href={proj.githubLink}>
                    <i className="fab fa-github"></i>
                </a>
            </div>

        </>
    )
}

export default Project;