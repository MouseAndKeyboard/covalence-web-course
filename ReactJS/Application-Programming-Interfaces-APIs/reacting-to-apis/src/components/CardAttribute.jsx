import React from 'react'

const CardAttribute = (props) => {
    return (
        <div className="row">
            <div className="col text-right">
                {props.name}
                    </div>
            <div className="col">
                {props.value}
            </div>
        </div>
    );
}

export default CardAttribute;