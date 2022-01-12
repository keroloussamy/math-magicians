import React from 'react';
import { render } from '@testing-library/react';
import Calculator from '../../components/Calculator/Calculator';

it('Calculator component', () => {
  const tree = render(<Calculator />);
  expect(tree).toMatchSnapshot();
});
