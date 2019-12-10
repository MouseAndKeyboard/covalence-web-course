import React from 'react'
import MovieInfo from './MovieInfo'

const MovieCards = (props) => {
    let items = props.movies.map(item => {
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

export default MovieCards