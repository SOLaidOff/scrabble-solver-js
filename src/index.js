import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ScrabbleSolver from './ScrabbleSolver';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<ScrabbleSolver />, document.getElementById('root'));
registerServiceWorker();
