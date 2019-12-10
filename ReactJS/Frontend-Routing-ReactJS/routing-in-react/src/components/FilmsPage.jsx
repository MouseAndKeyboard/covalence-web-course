import React, { Component } from 'react';
import fetch from 'isomorphic-fetch';
import Loading from './Loading';
import PageBanner from './PageBanner'
import FilmCard from './FilmCard';


class FilmsPage extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            loading: true,
            films: []
        }
    }

    componentDidMount(){        
        fetch("https://ghibliapi.herokuapp.com/films")
        .then(response => response.json())
        .then(obj => {
            this.setState({loading: false,
                           films: obj});
        }); 
    }

    render() {
        if (this.state.loading){
            return (
                <Loading message="Loading..."/>
            );
        } else {

            let cards = this.state.films.map((item) => {
                return <FilmCard 
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        description={item.description}
                        director={item.director}
                        producer={item.producer}
                        release_date={item.release_date}
                        rt_score={item.rt_score} />
            });

            return (
                <div className="container">
                    <PageBanner title="Films"/>
                    {cards}
                </div>
            );
        }
        
    }
}

export default FilmsPage;