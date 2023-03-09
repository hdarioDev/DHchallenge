import React from 'react';
import {render, screen} from '@testing-library/react-native';
import HeaderText from './HeaderText';

describe('<HeaderText>', () => {
  it('should render the title and subtitle as text', () => {
    render(<HeaderText title="Title" subTitle="Subtitle" />);
    expect(screen.getByText(/Title/)).toBeTruthy();
    expect(screen.getByText(/Subtitle/)).toBeTruthy();
  });
});
