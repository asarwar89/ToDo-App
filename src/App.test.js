import { render, screen } from '@testing-library/react';
import App from './App';

test('renders To-do list', () => {
  render(<App />);
  const titleElement = screen.getByText(/To-do list/i);
  expect(titleElement).toBeInTheDocument();
});
