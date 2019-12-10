import React from 'react'
import PersonInfo from './PersonInfo'

const PeopleCards = (props) => {
    let items = props.people.map(person => {
        return (<PersonInfo 
            name={person.name}
            gender={person.gender}
            age={person.age}
            eye_color={person.eye_color}
            hair_color={person.hair_color}
            name={person.name}
            key={person.id}
        />);
    }); 

    return (
        <div>
            {items}
        </div>
    );
}

export default PeopleCards