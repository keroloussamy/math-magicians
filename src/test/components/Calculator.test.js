import React from 'react';
import {
  render, fireEvent, waitFor, screen,
} from '@testing-library/react';
import Calculator from '../../components/Calculator/Calculator';

it('Calculator component', () => {
  const tree = render(<Calculator />);
  expect(tree).toMatchSnapshot();
});

test('Test Calculator', async () => {
  render(<Calculator />);
  fireEvent.click(screen.getByText('9'));
  const result = await waitFor(() => screen.getByTestId('result'));
  expect(result.textContent).toBe('9');
});
