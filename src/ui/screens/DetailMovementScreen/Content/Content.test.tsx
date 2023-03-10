// test

import React from 'react';
import {render} from '@testing-library/react-native';
import Content from './Content';

describe('<Content />', () => {
  it('should render correctly', () => {
    const {getByText} = render(<Content date="2021-01-01" points={10} />);
    expect(getByText('Detalles del producto:')).toBeTruthy();
    expect(getByText(/Comprado/)).toBeTruthy();
    expect(getByText('Con esta compra acumulaste:')).toBeTruthy();
    expect(getByText('10 Puntos')).toBeTruthy();
  });
});
