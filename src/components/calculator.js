import React, { useState } from 'react';
import calculate from '../logic/calculate';

function Calculator(props) {
  const [state, setState] = useState({
    total: 0,
    next: 0,
    operation: '',
  });

  const clickHandler = (e) => {
    setState(calculate(state, e.target.textContent));
  };

  const { next, total } = state;

  return (
    <div className="calculator">
      <h1>{ props.name }</h1>
      <div className="screen-container">{next || total || 0}</div>
      <div className="touch-pad">
        <button onClick={clickHandler} type="button">AC</button>
        <button onClick={clickHandler} type="button">+/-</button>
        <button onClick={clickHandler} type="button">%</button>
        <button onClick={clickHandler} className="orange" type="button">÷</button>

        <button onClick={clickHandler} type="button">7</button>
        <button onClick={clickHandler} type="button">8</button>
        <button onClick={clickHandler} type="button">9</button>
        <button onClick={clickHandler} className="orange" type="button">*</button>

        <button onClick={clickHandler} type="button">4</button>
        <button onClick={clickHandler} type="button">5</button>
        <button onClick={clickHandler} type="button">6</button>
        <button onClick={clickHandler} className="orange" type="button">-</button>

        <button onClick={clickHandler} type="button">1</button>
        <button onClick={clickHandler} type="button">2</button>
        <button onClick={clickHandler} type="button">3</button>
        <button onClick={clickHandler} className="orange" type="button">+</button>

        <button onClick={clickHandler} type="button">0</button>
        <button onClick={clickHandler} type="button">.</button>
        <button onClick={clickHandler} className="orange" type="button">=</button>
      </div>

    </div>
  );
}

export default Calculator;
