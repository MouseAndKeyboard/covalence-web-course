import React from 'react'

const MovieInfo = (props) => {
    return (
        <div className="card m-1">
            <div className="card-header">
                {props.title}
            </div>
            <div className="card-body">
                <div className="table">
                    <div className="row">
                            <div className="col">
                                <h5>Description</h5> 
                                {props.description}
                                <br></br>
                                <br></br>
                            </div>
                    </div>
                    <div className="row">
                            <div className="col text-right">
                                Director
                            </div>
                            <div className="col">
                                {props.director}
                            </div>
                    </div>
                    <div className="row">
                            <div className="col text-right">
                                Producer
                            </div>
                            <div className="col">
                                {props.producer}
                            </div>
                    </div>
                    <div className="row">
                            <div className="col text-right">
                                Release date
                            </div>
                            <div className="col">
                                {props.releaseDate}
                            </div>
                    </div>
                    <div className="row">
                            <div className="col text-right">
                                Rotten tomatos
                            </div>
                            <div className="col">
                                {props.rt}%
                            </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MovieInfo