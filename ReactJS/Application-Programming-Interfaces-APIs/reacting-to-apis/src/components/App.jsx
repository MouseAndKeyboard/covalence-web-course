import React, { Component } from 'react'
import fetch from 'isomorphic-fetch';

import MovieInfo from './MovieInfo';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            movies: []
        }
    }

    componentDidMount(){
        fetch("https://ghibliapi.herokuapp.com/films")
        .then(response => response.json())
        .then(movies => this.setState({movies}));
    }

    render() {

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
            <div className="container">
                {items}
            </div>
        );
    }
}

export default App
