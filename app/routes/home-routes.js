import React from 'react';
import HomeView from '../views/home';

/**
 * Sample Administration view.
 * @returns {JSX.element} content of the view
 */
const AdminView = () => <div><h2>{'Administration'}</h2></div>;

const routes = [
    {
        path: 'home',
        component: HomeView
    },
    {
        path: 'admin',
        component: AdminView
    }
];

export default routes;
