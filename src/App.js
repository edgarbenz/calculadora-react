import './App.css';
import Boton from './componentes/Boton';
import Pantalla from './componentes/Pantalla';
import BotonClear from './componentes/BotonClear';
import Logo from './componentes/Logo';
import { useState } from 'react';
import { evaluate, isNumber } from 'mathjs';

function App() {

  const [input, setInput] = useState('');

  const agregarInput = val => {

    if(input.length === 0 && isNaN(val)) {
      alert('Error: Debes empezar por con un numero');
      setInput('');
    } else if(isNaN(input[input.length - 1]) && isNaN(val)) {
        alert('Error: No pueden ir 2 operadores juntos');
        setInput('');
    } else {
        setInput(input + val);
    }
  }

  const calcularResultado = () => {
    if(!input) {
      alert('Ingresa valores para calcular');
    } else if(input.endsWith('/0')) {
        alert('Error division entre 0');
        setInput('');
    } else {
        setInput(evaluate(input).toString());
    }
  }

  return (
    <div className='App'>
      <Logo />
      <div className='contenedor-calculadora'>
        <Pantalla input={input}/>
        <div className='fila'>
          <Boton manejarClick={agregarInput}>1</Boton>
          <Boton manejarClick={agregarInput}>2</Boton>
          <Boton manejarClick={agregarInput}>3</Boton>
          <Boton manejarClick={agregarInput}>+</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClick={agregarInput}>4</Boton>
          <Boton manejarClick={agregarInput}>5</Boton>
          <Boton manejarClick={agregarInput}>6</Boton>
          <Boton manejarClick={agregarInput}>-</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClick={agregarInput}>7</Boton>
          <Boton manejarClick={agregarInput}>8</Boton>
          <Boton manejarClick={agregarInput}>9</Boton>
          <Boton manejarClick={agregarInput}>*</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClick={calcularResultado}>=</Boton>
          <Boton manejarClick={agregarInput}>0</Boton>
          <Boton manejarClick={agregarInput}>.</Boton>
          <Boton manejarClick={agregarInput}>/</Boton>
        </div>
        <div className='fila'>
          <BotonClear manejarClear={() => setInput('')}>
            Clear
          </BotonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
