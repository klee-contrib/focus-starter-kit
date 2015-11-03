import React from 'react';
import Backbone from 'backbone';

const HomePage =  React.createClass({
    displayName: 'HomeView',
    render() {
        return (
            <div>
                <h1>Welcome on board !</h1>
                <h2 onClick={() => Backbone.history.navigate('movies/1', true)}>Movie 1</h2>
            </div>
        );
    }
});

export default HomePage;
