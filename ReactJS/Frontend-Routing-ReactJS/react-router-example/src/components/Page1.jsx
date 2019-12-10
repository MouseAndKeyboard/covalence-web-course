import React, { Component } from 'react';
import fetch from 'isomorphic-fetch';

class Page1 extends Component {
    
    componentDidMount() {
        fetch("https://ghibliapi.herokuapp.com/films")
        .then(resp => resp.json())
        .then(obj => {
            console.log(obj);
        });
    }
    
    render() {
        return (
            <h1>This is Page 1</h1>
        );
    }
}

export default Page1;