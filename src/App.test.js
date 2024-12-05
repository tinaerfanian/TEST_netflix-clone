
import { render, screen } from '@testing-library/react';
import Welcome from './components/Welcome';

jest.mock('react-bootstrap', () => ({
  Alert: ({ children }) => <div>{children}</div>,
}));

describe('Welcome Component', () => {
  test('renders Welcome component with the correct heading text', () => {
    render(<Welcome />);
    const headingElement = screen.getByRole('heading', { level: 1 });
    expect(headingElement).toBeInTheDocument();
    expect(headingElement).toHaveTextContent('Benvenuti in EpiBooks!');
  });
});
