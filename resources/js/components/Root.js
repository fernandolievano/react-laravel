import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Root extends Component {
    render() {
        return (
            <div>
                <h1>React/Laravel App</h1>
            </div>
        );
    }
}

if (document.getElementById('root')) {
    ReactDOM.render(<Root />, document.getElementById('root'));
}
