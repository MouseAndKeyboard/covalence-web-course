import React from 'react'

const PersonInfo = (props) => {
    let {gender, age, eye_color, hair_color} = props; 

    let attributes = (
        <InfoCard data={{Gender: gender, Age: age, Eye_colour: eye_color, Hair_colour: hair_color}}/>
    );

    let bdy = (
        <div className="table">
            {attributes}
        </div>
    );

    return (
        <Card header={props.name} body={bdy} />
    );
}

export default PersonInfo