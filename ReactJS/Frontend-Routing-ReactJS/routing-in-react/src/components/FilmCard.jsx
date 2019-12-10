import React from 'react'

const FilmCard = (props) => {
    return (
        <div className="card my-2 text-white bg-secondary">
            <div className="card-header bg-dark">
                {props.title}
            </div>
            <div className="card-body">
                {props.description}       
            </div>
            <div className="card-footer">
                
            </div>
        </div>
    );
}

export default FilmCard;