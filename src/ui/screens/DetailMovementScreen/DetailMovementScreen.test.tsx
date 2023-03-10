import React from 'react';
import {render} from '@testing-library/react-native';
import DetailMovementScreen from './DetailMovementScreen';

describe('DetailMovementScreen', () => {
  it('should render product title', () => {
    const mockRoute = {
      params: {
        product: 'Test product',
        image: 'https://example.com/test.png',
        createdAt: '2022-01-01',
        points: 10,
      },
    };
    const {getByText} = render(<DetailMovementScreen route={mockRoute} />);
    expect(getByText('Test product')).toBeDefined();
  });
});
