import React from "react";
import { number, string } from 'prop-types'
import { Link } from "react-router-dom";

function PortfolioItem({id, title, title2, img}) {
    console.log(id, title, img);

    return <Link to={`/projects/${id}`} className="portfolio__item">
        <img src={img} alt={`${title + ' ' + title2} project`} className="portfolio__img" />
    </Link>
}

PortfolioItem.propTypes = {
    id: number.isRequired,
    title: string.isRequired,
    title2: string.isRequired,
    img: string.isRequired,
}

export default PortfolioItem