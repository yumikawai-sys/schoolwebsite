import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/スクールの管理業務を一気にお任せ/i);
  expect(linkElement).toBeInTheDocument();
});
