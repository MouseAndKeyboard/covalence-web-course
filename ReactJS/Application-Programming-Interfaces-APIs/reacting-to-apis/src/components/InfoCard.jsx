import React from 'react'
import CardAttribute from './CardAttribute'

const InfoCard = (props) => {

    let attributes = [];

    for (const key in props.data) {
        if (props.data.hasOwnProperty(key)) {
            attributes.push(<CardAttribute name={key} value={props.data[key]} />)
        } else {
            attributes.push(<React.Fragment></React.Fragment>)
        }
    }

    return (
        <React.Fragment>
            {attributes}
        </React.Fragment>
    );
}

export default InfoCard