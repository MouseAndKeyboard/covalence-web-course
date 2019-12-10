import React from 'react'

const Card = (props) => {
    return (
        <div className="card m-1">
            <div className="card-header">
                {props.header}
            </div>
            <div className="card-body">
                {props.body}
            </div>
        </div>);
}

export default Card;