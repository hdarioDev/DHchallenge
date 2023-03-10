import React from 'react';
import {render} from '@testing-library/react-native';
import DetailMovementScreen from './DetailMovementScreen';
import {NavigationContainer} from '@react-navigation/native';

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
    const {getByText} = render(
      <NavigationContainer>
        <DetailMovementScreen route={mockRoute} />
      </NavigationContainer>,
    );
    expect(getByText('Test product')).toBeDefined();
  });
});
