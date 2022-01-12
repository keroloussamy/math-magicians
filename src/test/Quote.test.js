import React from 'react';
import { render } from '@testing-library/react';
import Quote from '../components/Quote/Quote';

it('Quote component', () => {
  const tree = render(<Quote />);
  expect(tree).toMatchSnapshot();
});
