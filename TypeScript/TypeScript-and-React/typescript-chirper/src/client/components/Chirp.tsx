import React from 'react'
import {Link} from 'react-router-dom';

export interface IChirpProps {
    // timeStamp: string,
    poster: string,
    message: string,
    id: string
}

const Chirp: React.FunctionComponent<IChirpProps> = (props) => {

    // let d = new Date(props.timeStamp);
    let link = `/edit/${props.id}`

    return(
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