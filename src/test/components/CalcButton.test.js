import React from 'react';
import { render } from '@testing-library/react';
import CalcButton from '../../components/CalcButton/CalcButton';

it('CalcButton component', () => {
  const onClickHandlerFun = () => {

  };
  const tree = render(<CalcButton className="btn-Gray" name="AC" onClickHandler={onClickHandlerFun} />);
  expect(tree).toMatchSnapshot();
});
