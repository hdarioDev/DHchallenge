// test
import React from 'react';
import {render} from '@testing-library/react-native';
import HomeScreen from './HomeScreen';

describe('<HomeScreen>', () => {
  it('renders correctly', () => {
    const {getByText} = render(<HomeScreen />);
    expect(getByText(/Bienvenido de vuelta!/)).toBeTruthy();
  });
});
