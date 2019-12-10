import React, { Component } from 'react'
import fetch from 'isomorphic-fetch';
import Loading from './Loading';
import PageBanner from './PageBanner';

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
                    <div className="card text-white bg-secondary card-text">
                        <div className="card-header bg-dark">

                        </div>
                        <div className="card-body">
                            
                        </div>
                    </div>
                </div>
            );
        }
    }
}

export default SpecificFilmPage;