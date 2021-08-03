// take this component's generated HTML and put it 
// on the page (in the DOM)

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

ReactDOM.render(<App />, document.querySelector('#root'));
