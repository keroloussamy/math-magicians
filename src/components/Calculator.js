import React from 'react';
import './Calculator.css';

// eslint-disable-next-line react/prefer-stateless-function
class Calculator extends React.Component {
  render() {
    return (
      <table className="calculator">
        <tbody>
          <tr>
            <th colSpan="4" className="th-result"><p className="calculator-result">0</p></th>
          </tr>
          <tr>
            <th className="w-25"><button type="button" className="btn-Gray">AC</button></th>
            <th className="w-25"><button type="button" className="btn-Gray">+/-</button></th>
            <th className="w-25"><button type="button" className="btn-Gray">%</button></th>
            <th className="w-25"><button type="button" className="btn-Orange">÷</button></th>
          </tr>
          <tr>
            <th><button type="button" className="btn-Gray">7</button></th>
            <th><button type="button" className="btn-Gray">8</button></th>
            <th><button type="button" className="btn-Gray">9</button></th>
            <th><button type="button" className="btn-Orange">x</button></th>
          </tr>
          <tr>
            <th><button type="button" className="btn-Gray">4</button></th>
            <th><button type="button" className="btn-Gray">5</button></th>
            <th><button type="button" className="btn-Gray">6</button></th>
            <th><button type="button" className="btn-Orange">+</button></th>
          </tr>
          <tr>
            <th><button type="button" className="btn-Gray">1</button></th>
            <th><button type="button" className="btn-Gray">2</button></th>
            <th><button type="button" className="btn-Gray">3</button></th>
            <th><button type="button" className="btn-Orange">-</button></th>
          </tr>
          <tr>
            <th colSpan="2"><button type="button" className="btn-Gray">0</button></th>
            <th><button type="button" className="btn-Gray">.</button></th>
            <th><button type="button" className="btn-Orange">=</button></th>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default Calculator;
