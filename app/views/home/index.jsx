import React from 'react';
import Backbone from 'backbone';

const HomePage =  React.createClass({
    displayName: 'HomeView',
    render() {
        return (
            <div>
                <h1>Title h1</h1>
                <h2>Title h2</h2>
                <h3>Title h3</h3>
                <h4>Title h4</h4>
                <h5>Title h5</h5>
                <h6>Title h6</h6>
                <a onClick={() => Backbone.history.navigate('movies/1', true)}>Movie 1</a>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
            </div>
        );
    }
});

export default HomePage;
