import React from 'react';
import { Link } from 'react-router-dom';
import MetaInfoCard from './MetaInfoCard';

const PersonCard = (props) => {
    let metaInfo = [
        { left: "Gender:", right: props.gender },
        { left: "Age:", right: props.age },
        { left: "Eye colour:", right: props.eye_color },
        { left: "Hair colour:", right: props.hair_color },
    ]

    let link = `/films/${props.id}`;

    return (

        <div className="card my-2 text-white bg-secondary card-text">
            <div className="card-header bg-dark">
                {props.name}
            </div>
            <div className="card-footer text-center">
                <MetaInfoCard info={metaInfo} />
                <Link to={link}>
                    <button className="btn btn-success stretched-link">Read more...</button>
                </Link>
            </div>
        </div>
    );
}

export default PersonCard;