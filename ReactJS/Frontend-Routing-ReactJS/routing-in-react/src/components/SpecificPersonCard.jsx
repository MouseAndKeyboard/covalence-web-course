import React from 'react'
import MetaInfoCard from './MetaInfoCard';


const SpecificPersonCard = (props) => {
    let metaInfo = [
        { left: "Gender:", right: props.gender },
        { left: "Age:", right: props.age },
        { left: "Eye colour:", right: props.eye_color },
        { left: "Hair colour:", right: props.hair_color },
    ]

    return (

        <div className="card my-2 text-white bg-secondary card-text">
            <div className="card-header bg-dark">
                {props.name}
            </div>
            <div className="card-footer text-center">
                <MetaInfoCard info={metaInfo} />
            </div>
        </div>
    );
}

export default SpecificPersonCard;