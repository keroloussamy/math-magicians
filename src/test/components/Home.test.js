import React from 'react';
import { render } from '@testing-library/react';
import Home from '../../components/Home/Home';

it('Home component', () => {
  const tree = render(<Home />);
  expect(tree).toMatchSnapshot();
});
