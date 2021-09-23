import React from 'react';
import ReactDOM from 'react-dom';
import Dashboard from "./AdminPanel/Dashboard";

function Example() {
    return (
        <Dashboard />
    );
}

export default Example;

if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}
