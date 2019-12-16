import React from 'react'
import { Link } from 'react-router-dom';
import $ from 'jquery';
import { useHistory } from "react-router-dom";
import {useState, useEffect} from "react";

export interface IChirpProps {
    // timeStamp: string,
    poster: string,
    message: string,
    id: string
}

const Chirp: React.FunctionComponent<IChirpProps> = (props: IChirpProps) => {
   
    let history = useHistory();
    let deleteChirp = (event: React.MouseEvent<HTMLButtonElement>) => {
        console.log(props.id);
        
        $.ajax(`/api/chirps/${props.id}`, { method: "DELETE" })
        .then(() => {
            history.replace('/');
        })
        .catch((err) => {
            console.log(err);
            console.log();
            
            alert('Delete failed!');
        })
    }

    // let d = new Date(props.timeStamp);
    let link = `/edit/${props.id}`

    return (
        <div className="card m-1">
            <div className="card-header">
                <div className="row">
                    <div className="col">
                        {props.poster}
                    </div>

                    <div className="col d-flex flex-row-reverse">
                        <Link to={{
                            pathname: link,
                            state: {
                                defaultMessage: props.message,
                                author: props.poster
                            }
                        }}><button className="btn btn-secondary">Edit message</button></Link>
                        <button type="button" className="close text-danger mx-5" data-toggle="modal" data-target="#exampleModal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>

                        <div className="modal fade" id="exampleModal" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog" role="document">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title">Delete Chirp</h5>
                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div className="modal-body">
                                        <p>Are you sure you want to delete this message?</p>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                        <button type="button" className="btn btn-danger" data-dismiss="modal" onClick={deleteChirp}>Delete</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
            <div className="card-body">
                {props.message}
            </div>
        </div>
    );
}

export default Chirp