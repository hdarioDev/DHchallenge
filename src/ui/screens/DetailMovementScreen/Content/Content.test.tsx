// test

import React from 'react';
import {render} from '@testing-library/react-native';
import Content from './Content';
import {NavigationContainer} from '@react-navigation/native';

describe('<Content />', () => {
  it('should render correctly', () => {
    const {getByText} = render(
      <NavigationContainer>
        <Content date="2021-01-01" points={10} />
      </NavigationContainer>,
    );
    expect(getByText('Detalles del producto:')).toBeTruthy();
    expect(getByText(/Comprado/)).toBeTruthy();
    expect(getByText('Con esta compra acumulaste:')).toBeTruthy();
    expect(getByText('10 Puntos')).toBeTruthy();
  });
});
