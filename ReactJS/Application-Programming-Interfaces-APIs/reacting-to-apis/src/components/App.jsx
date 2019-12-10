import React, { Component } from 'react'
import fetch from 'isomorphic-fetch';

import MovieInfo from './MovieInfo';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            movies: [],
            success: 0
        }

        this.loadFilms = this.loadFilms.bind(this);
        this.handleButtonClick = this.handleButtonClick.bind(this);
    }

    loadFilms(){
        fetch("https://ghibliapi.herokuapp.com/films")
        .then(response => response.json())
        .then(movies => {
            this.setState({movies});
            this.setState({success: 1});
            this.setState({loading: false});
            }
        ).catch(err => {
            this.setState({success: -1})
            this.setState({loading: false});
        });
    }

    handleButtonClick(){
        this.setState({loading: true})
        this.loadFilms();
    }

    render() {
        if (this.state.loading === true) {
            return (
                <h3>Loading...</h3>
            );
        }
        
        if (this.state.success === 1){
            let items = this.state.movies.map(item => {
                return (<MovieInfo 
                    title={item.title}
                    description={item.description}
                    director={item.director}
                    producer={item.producer}
                    releaseDate={item.release_date}
                    rt={item.rt_score}
                    key={item.id}
                />);
            }); 

            return (
                <div>
                    {items}
                </div>
            );
        }
        else if (this.state.success === -1){
            return(
                <div class="alert alert-warning" role="alert">
                    <h5>Could not load content...</h5>
                    <button className="btn btn-primary" onClick={this.handleButtonClick}>
                        Try again
                    </button>
                </div>
            );
        }
        else {
            return(
                <button className="btn btn-primary" onClick={this.handleButtonClick}>
                    Load film data
                </button>
            );
        }
        
    }
}

export default App
