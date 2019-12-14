import React from 'react'

interface IChirpProps {
    timeStamp: Date,
    poster: string,
    message: string
}

const Chirp: React.FunctionComponent<IChirpProps> = (props) => {

    let d = new Date(props.timeStamp);

    return(
        <div className="card m-1">
            <div className="card-header">
                <div className="row">
                    <div className="col">
                        {props.poster}
                    </div>
                    <div className="col">
                        {d.toDateString()}
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