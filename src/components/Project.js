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

    const proj = allProjects.find(p => p.id == id);
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
                    <a className="social-list__link git-link" href={proj.githubLink}>
                        <i className="fab fa-github"></i>
                    </a>
                    <a className="social-list__link git-link" href={proj.githubPagesLink}>
                        <i className="fab fa-github"></i> Pages
                    </a>
                    <br></br>
                    <Link to="/#work" className="back-btn">Back to projects</Link>
                </div>
            </div>

        </>
    )
}


Project.propTypes = {
    allProjects: array,
}
export default Project;