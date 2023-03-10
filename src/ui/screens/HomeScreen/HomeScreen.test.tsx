// test
import React from 'react';
import {render} from '@testing-library/react-native';
import HomeScreen from './HomeScreen';
import {NavigationContainer} from '@react-navigation/native';

describe('<HomeScreen>', () => {
  it('renders correctly', () => {
    const {getByText} = render(
      <NavigationContainer>
        <HomeScreen />{' '}
      </NavigationContainer>,
    );
    expect(getByText(/Bienvenido de vuelta!/)).toBeTruthy();
  });
});
