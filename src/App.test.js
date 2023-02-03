import { render, screen } from '@testing-library/react';
import App from './App';

test('greeting', () => {
  render(<App />);
  const linkElement = screen.getByText(/Hello John, welcome to Spain!/i);
  expect(linkElement).toBeInTheDocument();
});

test('button', () => {
  render(<App />);
  const linkElement = screen.getByTestId
  expect(linkElement).toBeInTheDocument();
});
