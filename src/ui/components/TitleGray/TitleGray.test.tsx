// bgenerate test
import React from 'react';
import {render} from '@testing-library/react-native';
import TitleGray from './TitleGray';

describe('<TitleGray/>', () => {
  it('should render', () => {
    const {getByText} = render(<TitleGray title="TUS PUNTOS" />);
    expect(getByText(/TUS PUNTOS/)).toBeDefined();
  });
});
