import React, { Component } from 'react'
import PersonCard from './PersonCard';
import Loading from './Loading';
import PageBanner from './PageBanner';

class PeoplePage extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            loading: true,
            people: []
        }
    }

    componentDidMount(){        
        fetch("https://ghibliapi.herokuapp.com/people")
        .then(response => response.json())
        .then(obj => {
            this.setState({loading: false,
                           people: obj});
        }); 
    }

    render() {
        if (this.state.loading){
            return (
                <Loading message="Loading..."/>
            );
        } else {

            let cards = this.state.people.map((item) => {
                return <PersonCard 
                        key={item.id}
                        id={item.id}
                        gender={item.gender}
                        age={item.age}
                        eye_color={item.eye_color}
                        hair_color={item.hair_color}
                        name={item.name} />
            });

            return (
                <div className="container">
                    <PageBanner title="People"/>
                    {cards}
                </div>
            );
        }
    }
}

export default PeoplePage;