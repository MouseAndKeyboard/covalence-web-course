import React from 'react'
import Card from './Card'
import CardAttribute from './CardAttribute';
import InfoCard from './InfoCard';

const MovieInfo = (props) => {

    let {director, producer, releaseDate, rt} = props; 

    let attributes = (
        <InfoCard data={{Director: director, Producer: producer, Release_date: releaseDate, Rotten_Tomatos: rt}}/>
    );

    let bdy = (
        <div className="table">
            <div className="row">
                <div className="col">
                    {props.description}
                    <br></br>
                    <br></br>
                </div>
            </div>
            {attributes}
        </div>
    );

    return (
        <Card header={props.title} body={bdy} />
    );
}

export default MovieInfo