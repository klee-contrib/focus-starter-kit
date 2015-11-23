import React from 'react';
import Backbone from 'backbone';

function HomeView() {
    return (
        <div>
            <h1>Bienvenue sur la démo FOCUS</h1>
            <p><a onClick={() => Backbone.history.navigate('movies/10053', true)}>Movie 10053</a></p>
            <p><a onClick={() => Backbone.history.navigate('persons/10', true)}>Person 10</a></p>
        </div>
    );
}


HomeView.displayName = 'HomeView';
export default HomeView;
