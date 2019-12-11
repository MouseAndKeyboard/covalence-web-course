import React, { Component } from 'react'

import SpecificPersonCard from './SpecificPersonCard';
import Loading from './Loading';
import PageBanner from './PageBanner';

class SpecificPersonPage extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            loading: true,
            person_data: {}
        };
    }

    componentDidMount() {
        fetch(`https://ghibliapi.herokuapp.com/people/${this.props.match.params.id}`)
            .then(resp => resp.json())
            .then(obj => {
                this.setState({
                    person_data: obj,
                    loading: false
                    });
            })
            .catch(err => console.log(err));
    }

    render() {
        if (this.state.loading) {
            return (
                <Loading message="Loading..." />
            );
        } else {
           
            return (
                <div className="container">
                    <PageBanner title={this.state.person_data.name}/>
                    <SpecificPersonCard 
                        gender={this.state.person_data.gender}
                        age={this.state.person_data.age}
                        eye_color={this.state.person_data.eye_color}
                        hair_color={this.state.person_data.hair_color}
                        />
                </div>
            );
        }
    }
}

export default SpecificPersonPage;