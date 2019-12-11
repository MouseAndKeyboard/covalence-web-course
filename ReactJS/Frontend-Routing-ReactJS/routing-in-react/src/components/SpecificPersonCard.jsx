import React from 'react'
import MetaInfoCard from './MetaInfoCard';
import { Link } from 'react-router-dom';

const SpecificPersonCard = (props) => {
    let metaInfo = [
        { left: "Gender:", right: props.gender },
        { left: "Age:", right: props.age },
        { left: "Eye colour:", right: props.eye_color },
        { left: "Hair colour:", right: props.hair_color },
    ]

    let filmLinks = [];
    if (props.films){
        filmLinks = props.films.map(item => {

            console.log(item);
            
    
            const url = item.split('/');
            const id = url[url.length - 1];
            
            if (id.length === 36){
                const localUrl = `/films/${id}`;
                return (
                    <Link to={localUrl} key={id}><button className="btn btn-success m-1">Film</button></Link>
                );
            } else {
                return (
                    <div key={id}></div>
                );
            }
    
    
            
        });
    }

    return (

        <div className="card my-2 text-white bg-secondary card-text">
            <div className="card-header bg-dark">
                {props.name}
            </div>
            <div className="card-footer text-center">
                <MetaInfoCard info={metaInfo} />
                <div className="text-center">
                    {filmLinks}
                </div>
            </div>
        </div>
    );
}

export default SpecificPersonCard;