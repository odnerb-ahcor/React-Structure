import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import Titulo from './component/Titulo';
import Button from './component/Button';
import './styles/styles.css';

const soma = (a, b) => alert( a + b );

const App = () => {
    return (
        <div className='App'>
            <Titulo titulo="Estrutura React"/>
            <Button onClick={() => soma(5,5)} name="Somar os Valores"/>
        </div>
    )
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);