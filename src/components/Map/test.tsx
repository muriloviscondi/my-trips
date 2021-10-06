import { render, screen } from '@testing-library/react';

import Map from '.';

describe('<Map />', () => {
  it('should render without marker', () => {
    render(<Map />);

    expect(
      screen.getByRole('link', { name: /a js library for interactive maps/i })
    ).toBeInTheDocument();
  });

  it('should render with the marker in correct place', () => {
    const place = {
      id: '1',
      name: 'Franca',
      slug: 'franca',
      location: {
        latitude: 0,
        longitude: 0
      }
    };

    render(<Map places={[place]} />);

    expect(screen.getByTitle(/franca/i)).toBeInTheDocument();
  });
});
