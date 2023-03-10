import React from 'react';
import {render} from '@testing-library/react-native';
import YourPoints from './YourPoints';

describe('<YourPoints/>', () => {
  it('should render', () => {
    const {getByText} = render(
      <YourPoints month="Diciembre" sumPoints={1000} />,
    );
    expect(getByText(/Diciembre/)).toBeDefined();
  });
  it('should render sumPoints with formatCurrency', () => {
    const {getByText} = render(
      <YourPoints month="Diciembre" sumPoints={1000} />,
    );
    expect(getByText(/1,000.00/)).toBeDefined();
  });
});
