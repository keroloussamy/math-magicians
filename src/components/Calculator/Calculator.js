import React, { useState } from 'react';
import './Calculator.css';
import CalcButton from '../CalcButton/CalcButton';
import calculate from '../../logic/calculate';

const Calculator = () => {
  const [state, setState] = useState({});

  const onClickHandlerFun = (e) => {
    const result = calculate(state, e.target.textContent);
    setState(result);
  };

  const { next, total } = state;
  return (
    <table className="calculator">
      <tbody>
        <tr>
          <th colSpan="4" className="th-result"><p className="calculator-result">{next ?? total ?? 0}</p></th>
        </tr>
        <tr>
          <th className="w-25"><CalcButton className="btn-Gray" name="AC" onClickHandler={onClickHandlerFun} aria-label="Mute volume" /></th>
          <th className="w-25"><CalcButton className="btn-Gray" name="+/-" onClickHandler={onClickHandlerFun} aria-label="Mute volume" /></th>
          <th className="w-25"><CalcButton className="btn-Gray" name="%" onClickHandler={onClickHandlerFun} aria-label="Mute volume" /></th>
          <th className="w-25"><CalcButton className="btn-Orange" name="÷" onClickHandler={onClickHandlerFun} aria-label="Mute volume" /></th>
        </tr>
        <tr>
          <th><CalcButton className="btn-Gray" name="7" onClickHandler={onClickHandlerFun} aria-label="Mute volume" /></th>
          <th><CalcButton className="btn-Gray" name="8" onClickHandler={onClickHandlerFun} aria-label="Mute volume" /></th>
          <th><CalcButton className="btn-Gray" name="9" onClickHandler={onClickHandlerFun} aria-label="Mute volume" /></th>
          <th><CalcButton className="btn-Orange" name="x" onClickHandler={onClickHandlerFun} aria-label="Mute volume" /></th>
        </tr>
        <tr>
          <th><CalcButton className="btn-Gray" name="4" onClickHandler={onClickHandlerFun} aria-label="Mute volume" /></th>
          <th><CalcButton className="btn-Gray" name="5" onClickHandler={onClickHandlerFun} aria-label="Mute volume" /></th>
          <th><CalcButton className="btn-Gray" name="6" onClickHandler={onClickHandlerFun} aria-label="Mute volume" /></th>
          <th><CalcButton className="btn-Orange" name="+" onClickHandler={onClickHandlerFun} aria-label="Mute volume" /></th>
        </tr>
        <tr>
          <th><CalcButton className="btn-Gray" name="1" onClickHandler={onClickHandlerFun} aria-label="Mute volume" /></th>
          <th><CalcButton className="btn-Gray" name="2" onClickHandler={onClickHandlerFun} aria-label="Mute volume" /></th>
          <th><CalcButton className="btn-Gray" name="3" onClickHandler={onClickHandlerFun} aria-label="Mute volume" /></th>
          <th><CalcButton className="btn-Orange" name="-" onClickHandler={onClickHandlerFun} aria-label="Mute volume" /></th>
        </tr>
        <tr>
          <th colSpan="2"><CalcButton className="btn-Gray" name="0" onClickHandler={onClickHandlerFun} aria-label="Mute volume" /></th>
          <th><CalcButton className="btn-Gray" name="." onClickHandler={onClickHandlerFun} aria-label="Mute volume" /></th>
          <th><CalcButton className="btn-Orange" name="=" onClickHandler={onClickHandlerFun} aria-label="Mute volume" /></th>
        </tr>
      </tbody>
    </table>
  );
};

export default Calculator;
