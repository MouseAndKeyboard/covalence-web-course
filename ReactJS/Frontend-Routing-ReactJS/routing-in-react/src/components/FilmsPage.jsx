import React, { Component } from 'react';
import fetch from 'isomorphic-fetch';

class FilmsPage extends Component {
    constructor(props) {
        super(props);
        

        this.state = {
            loading: true
        }
    }

    componentDidMount(){        
        fetch("https://ghibliapi.herokuapp.com/films")
        .then(response => response.json())
        .then(obj => {
            this.setState({loading: false});
        }); 
    }

    render() {
        if (this.state.loading){
            return (
                <div className="container text-center">
                    <div class="spinner-border m-5" role="status">
                        <span class="sr-only">Loading...</span>
                    </div>
                </div>
            );
        } else {
            return (
                <div></div>
            );
        }
        
    }
}

export default FilmsPage;