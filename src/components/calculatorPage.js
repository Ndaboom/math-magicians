import React from 'react';
import Calculator from './calculator';
import styles from './calculatorPage.module.css';

function CalculatorPage() {
  return (
    <div className={styles.CalculatorPage}>
      <h1>Lets do some math!</h1>
      <Calculator name="Calculator 1.0" />
    </div>
  );
}

export default CalculatorPage;
