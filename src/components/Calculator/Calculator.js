import React from 'react';
import './Calculator.css';
import CalcButton from '../CalcButton/CalcButton';
import calculate from '../../logic/calculate';

class Calculator extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  onClickHandler = (e) => {
    const result = calculate(this.state, e.target.textContent);
    this.setState(result);
  }

  render() {
    const { next, total } = this.state;
    return (
      <table className="calculator">
        <tbody>
          <tr>
            <th colSpan="4" className="th-result"><p className="calculator-result">{ next ?? total ?? 0 }</p></th>
          </tr>
          <tr>
            <th className="w-25"><CalcButton className="btn-Gray" name="AC" onClickHandler={this.onClickHandler} aria-label="Mute volume" /></th>
            <th className="w-25"><CalcButton className="btn-Gray" name="+/-" onClickHandler={this.onClickHandler} aria-label="Mute volume" /></th>
            <th className="w-25"><CalcButton className="btn-Gray" name="%" onClickHandler={this.onClickHandler} aria-label="Mute volume" /></th>
            <th className="w-25"><CalcButton className="btn-Orange" name="÷" onClickHandler={this.onClickHandler} aria-label="Mute volume" /></th>
          </tr>
          <tr>
            <th><CalcButton className="btn-Gray" name="7" onClickHandler={this.onClickHandler} aria-label="Mute volume" /></th>
            <th><CalcButton className="btn-Gray" name="8" onClickHandler={this.onClickHandler} aria-label="Mute volume" /></th>
            <th><CalcButton className="btn-Gray" name="9" onClickHandler={this.onClickHandler} aria-label="Mute volume" /></th>
            <th><CalcButton className="btn-Orange" name="x" onClickHandler={this.onClickHandler} aria-label="Mute volume" /></th>
          </tr>
          <tr>
            <th><CalcButton className="btn-Gray" name="4" onClickHandler={this.onClickHandler} aria-label="Mute volume" /></th>
            <th><CalcButton className="btn-Gray" name="5" onClickHandler={this.onClickHandler} aria-label="Mute volume" /></th>
            <th><CalcButton className="btn-Gray" name="6" onClickHandler={this.onClickHandler} aria-label="Mute volume" /></th>
            <th><CalcButton className="btn-Orange" name="+" onClickHandler={this.onClickHandler} aria-label="Mute volume" /></th>
          </tr>
          <tr>
            <th><CalcButton className="btn-Gray" name="1" onClickHandler={this.onClickHandler} aria-label="Mute volume" /></th>
            <th><CalcButton className="btn-Gray" name="2" onClickHandler={this.onClickHandler} aria-label="Mute volume" /></th>
            <th><CalcButton className="btn-Gray" name="3" onClickHandler={this.onClickHandler} aria-label="Mute volume" /></th>
            <th><CalcButton className="btn-Orange" name="-" onClickHandler={this.onClickHandler} aria-label="Mute volume" /></th>
          </tr>
          <tr>
            <th colSpan="2"><CalcButton className="btn-Gray" name="0" onClickHandler={this.onClickHandler} aria-label="Mute volume" /></th>
            <th><CalcButton className="btn-Gray" name="." onClickHandler={this.onClickHandler} aria-label="Mute volume" /></th>
            <th><CalcButton className="btn-Orange" name="=" onClickHandler={this.onClickHandler} aria-label="Mute volume" /></th>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default Calculator;
