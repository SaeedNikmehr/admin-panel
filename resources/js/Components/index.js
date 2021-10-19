// import Login from '../Components/Login/Login';
// import Agency from '../Pages/AdminPanel/Agency/Agency';
import Dashboard from '../Pages/AdminPanel/Dashboard/';
import Agency from '../Pages/AdminPanel/Agency/';
import AgencyDetails from '../Pages/AdminPanel/Agency/AgencyDetails/';
import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";


ReactDOM.render(
    <Router>
        <Switch>
            <Route exact path="/">
                <Dashboard />
            </Route>
            <Route path="/agency">
                <Agency />
            </Route>
            <Route path="/agency-details/:id">
                <AgencyDetails />
            </Route>
        </Switch>
    </Router>,
    document.getElementById('app')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
