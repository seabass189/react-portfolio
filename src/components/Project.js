import React from 'react';
import { useParams, Link } from 'react-router-dom';
import {array} from 'prop-types'

function Project({allProjects}) {
    window.scrollTo(0,0);
    const {id} = useParams()
    console.log('id', id);
    // const history = useHistory();
    //todo: load the project info
    console.log('all proj', allProjects); 
    if (allProjects.length === 0) {
        allProjects = JSON.parse(sessionStorage.getItem('projects'));
    }

    const proj = allProjects.find(p => String(p.id) === id);
    console.log(proj);

    return (
        <>
            <section className="intro">
                <h1 className="section__title section__title--intro">
                    {proj.title}<strong>{proj.title2}</strong>
                </h1>
                <p className="section__subtitle section__subtitle--intro">{proj.subtitle}</p>
                <img src={proj.img} alt="" className="intro__img"/>
            </section>
            
            <div className="portfolio-item-individual">
                <p>{proj.desc1}</p>
                <img src={proj.subImg} alt=""/>
                <p>{proj.desc2}</p>
                <p>{proj.desc3}</p>
                <div className='actions'>
                    <a className="social-list__link git-link" href={proj.githubLink} target="_blank" rel="noreferrer noopener">
                        <i className="fab fa-github fa-2xl"></i> Code
                    </a>
                    {proj.githubPagesLink &&
                        <a className="social-list__link git-page-link" href={proj.githubPagesLink} target="_blank" rel="noreferrer noopener">
                            <i className="fa-solid fa-star fa-2xl"></i> Pages
                        </a>
                    }
                </div>
                <Link to="/#work" className="btn back-btn">Back to projects</Link>
            </div>

        </>
    )
}


Project.propTypes = {
    allProjects: array,
}
export default Project;