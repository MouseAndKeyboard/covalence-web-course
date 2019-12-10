import React from 'react';
import MetaInfoCard from './MetaInfoCard';
import { Link } from 'react-router-dom';

const FilmCard = (props) => {

    let metaInfo = [
        { left: "Director:", right: props.director },
        { left: "Producer:", right: props.producer },
        { left: "Release date:", right: props.release_date },
        { left: "Score:", right: props.rt_score },
    ]

    let link = `/films/${props.id}`;

    return (

        <div className="card my-2 text-white bg-secondary card-text">
            <div className="card-header bg-dark">
                {props.title}
            </div>
            <div className="card-body">
                {props.description}
                <Link to={link}>
                    <button className="btn btn-success stretched-link">Read more...</button>
                </Link>
            </div>
            <div className="card-footer">
                <MetaInfoCard info={metaInfo} />
            </div>
        </div>
    );
}

export default FilmCard;