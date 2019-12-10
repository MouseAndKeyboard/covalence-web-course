import React from 'react';
import MetaInfoCard from './MetaInfoCard';

const FilmCard = (props) => {
    
    let metaInfo = [
        {left: "Director:", right: props.director},
        {left: "Producer:", right: props.producer},
        {left: "Release date:", right: props.release_date},
        {left: "Score:", right: props.rt_score},
    ]
    
    return (
        <div className="card my-2 text-white bg-secondary card-text">
            <div className="card-header bg-dark">
                {props.title}
            </div>
            <div className="card-body">
                {props.description}       
            </div>
            <div className="card-footer">
                <MetaInfoCard info={metaInfo}/>
            </div>
        </div>
    );
}

export default FilmCard;