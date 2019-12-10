import React, { Component } from 'react'
import fetch from 'isomorphic-fetch';

import MovieCards from './MovieCards';
import PeopleCards from './PeopleCards';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            movies: [],
            people: [],
            display: "none",
            success: 0
        }

        this.loadPeople = this.loadPeople.bind(this);
        this.loadFilms = this.loadFilms.bind(this);
        this.handleMovieButtonClick = this.handleMovieButtonClick.bind(this);
        this.handlePeopleButtonClick = this.handlePeopleButtonClick.bind(this);
    }

    loadFilms() {
        fetch("https://ghibliapi.herokuapp.com/films")
            .then(response => response.json())
            .then(movies => {
                this.setState({ movies, movies,
                                success: 1,
                                loading: false,
                                display: "movies" });
            }
            ).catch(err => {
                this.setState({ success: -1,
                                loading: false });
            });
    }

    loadPeople() {
        fetch("https://ghibliapi.herokuapp.com/people")
            .then(response => response.json())
            .then(people => {
                this.setState({ people: people, 
                                success: 1,
                                loading: false,
                                display: "people" });
            }
            ).catch(err => {
                this.setState({ success: -1,
                                loading: false });
            });
    }

    handleMovieButtonClick() {
        this.setState({ loading: true })
        this.loadFilms();
    }

    handlePeopleButtonClick() {
        this.setState({ loading: true })
        this.loadPeople();
    }

    render() {
        if (this.state.loading === true) {
            return (
                <h3>Loading...</h3>
            );
        }

        if (this.state.success === 1) {

            if (this.state.display === "movies") {
                return <MovieCards movies={this.state.movies} />
            }
            else if (this.state.display === "people") {
                return <PeopleCards people={this.state.people} />
            }
            else {
                return <div className="alert alert-warning">Something went wrong...</div>
            }
        }
        else if (this.state.success === -1) {
            return (
                <div class="alert alert-warning" role="alert">
                    <h5>Could not load content...</h5>
                    <button className="btn btn-primary" onClick={this.handleMovieButtonClick}>
                        Try again
                    </button>
                </div>
            );
        }
        else {
            return (
                <React.Fragment>
                    <button className="btn btn-primary" onClick={this.handleMovieButtonClick}>
                        Load film data
                    </button>
                    <button className="btn btn-primary" onClick={this.handlePeopleButtonClick}>
                        Load character data
                    </button>
                </React.Fragment>

            );
        }

    }
}

export default App
