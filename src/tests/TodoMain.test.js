import { render, screen } from '@testing-library/react';
import TodoMain from '../components/TodoMain/TodoMain';

test('renders Priority', () => {
  render(<TodoMain />);
  const titleElement = screen.getByText(/Priority/i);
  expect(titleElement).toBeInTheDocument();
});
