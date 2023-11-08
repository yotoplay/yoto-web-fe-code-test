import { render, screen } from '@testing-library/react';
import App from '..';

describe('App component', () => {
  it('renders Yoto logo', () => {
    render(<App />);
    const logoElement = screen.getByAltText('logo') as HTMLImageElement;
    expect(logoElement).toBeInTheDocument();
    expect(logoElement).toHaveClass('yoto-logo');
    expect(logoElement.src).toContain('yoto-smile.png');
  });
});
