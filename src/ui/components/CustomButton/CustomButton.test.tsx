//test

import React from 'react';
import {render} from '@testing-library/react-native';
import CustomButton from './CustomButton';

describe('<CustomButton />', () => {
  it('should render correctly', () => {
    const {getByText} = render(<CustomButton text="test" size="large" />);
    expect(getByText('test')).toBeDefined();
  });
});
