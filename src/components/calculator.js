/* eslint-disable react/no-unused-state */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import calculate from '../logic/calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      next: 0,
      operation: '',
    };
  }

  render() {
    const clickHandler = (e) => {
      this.setState((state) => calculate(state, e.target.textContent));
    };

    return (
      <div className="calculator">
        <h1>{ this.props.name }</h1>
        <div className="screen-container">{ this.state.next || this.state.total || 0 }</div>
        <div className="touch-pad">
          <button onClick={clickHandler} type="button">AC</button>
          <button onClick={clickHandler} type="button">+/-</button>
          <button onClick={clickHandler} type="button">%</button>
          <button onClick={clickHandler} className="orange" type="button">÷</button>

          <button onClick={clickHandler} type="button">7</button>
          <button onClick={clickHandler} type="button">8</button>
          <button onClick={clickHandler} type="button">9</button>
          <button onClick={clickHandler} className="orange" type="button">x</button>

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
}

export default Calculator;
