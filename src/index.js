import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


//Renderiza nosso App que está sendo importado na div root do index.html
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
