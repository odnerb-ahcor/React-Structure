import React from 'react';
import ReactDOM from 'react-dom';
import './estilos/styles.css';

const primeiroJSX = () => {
    return (
        <div>
            Brendo Rocha
        </div>
    )
}


const App = () => {
    return (
        <div className='App'>
            Hello World
            {primeiroJSX()}
        </div>
    )
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);