import { render, screen } from '@testing-library/react';
import App from './App';

test('renders book store', () => {
  render(<App />);
  
  const linkElements = screen.getAllByText(/book store/i);
  expect(linkElements[0]).toBeInTheDocument();
});