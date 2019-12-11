import React from 'react'
import MetaInfoCard from './MetaInfoCard'
import {Link} from 'react-router-dom'

const SpecificFilmCard = (props) => {

    let filmInfo = [
        { left: "Director:", right: props.director },
        { left: "Producer:", right: props.producer },
        { left: "Release date:", right: props.release_date },
        { left: "Score:", right: props.rt_score },
    ]

    let characterLinks = props.people.map(item => {

        console.log(item);
        

        const url = item.split('/');
        const id = url[url.length - 1];
        
        if (id.length === 36){
            const localUrl = `/people/${id}`;
            return (
                <Link to={localUrl} key={id}><button className="btn btn-success m-1">Player</button></Link>
            );
        } else {
            return (
                <div key={id}></div>
            );
        }


        
    });

    return (
        <div className="card text-white bg-secondary card-text">
            <div className="card-body">
                <MetaInfoCard info={filmInfo}/>
                <div className="text-center">
                    {characterLinks}
                </div>
            </div>
        </div>
    )
}

export default SpecificFilmCard;