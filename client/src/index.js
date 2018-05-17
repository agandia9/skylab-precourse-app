import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import './index.css';
import '../node_modules/highlight.js/styles/atom-one-dark.css'
import App from './components/App';

ReactDOM.render(<BrowserRouter>
        <App />
    </BrowserRouter>, document.getElementById('root')
);
