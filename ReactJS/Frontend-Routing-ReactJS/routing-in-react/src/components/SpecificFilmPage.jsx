import React, { Component } from 'react'
import fetch from 'isomorphic-fetch';
import Loading from './Loading';
import PageBanner from './PageBanner';
import SpecificFilmCard from './SpecificFilmCard';

class SpecificFilmPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: true,
            film_data: {}
        };
    }

    componentDidMount() {
        fetch(`https://ghibliapi.herokuapp.com/films/${this.props.match.params.id}`)
            .then(resp => resp.json())
            .then(obj => {
                this.setState({
                    film_data: obj,
                    loading: false
                    })
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
                    <PageBanner title={this.state.film_data.title}/>
                    <SpecificFilmCard 
                        director={this.state.film_data.director}
                        producer={this.state.film_data.producer}
                        release_date={this.state.film_data.release_date}
                        rt_score={this.state.film_data.rt_score}
                        people={this.state.film_data.people}
                        />
                </div>
            );
        }
    }
}

export default SpecificFilmPage;