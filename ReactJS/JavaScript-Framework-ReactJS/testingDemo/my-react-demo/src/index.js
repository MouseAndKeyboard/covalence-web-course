import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Comment from './components/Comment'

ReactDOM.render(
    <Comment
        author={ { name: "Jeff Besos", avatarUrl: "http://www.gstatic.com/tv/thumb/persons/532529/532529_v9_bb.jpg"} }
        text="How's it going?"
    />, 
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
