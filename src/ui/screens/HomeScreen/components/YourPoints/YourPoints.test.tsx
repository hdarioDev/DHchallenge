import React from 'react';
import {render} from '@testing-library/react-native';
import YourPoints from './YourPoints';

describe('<YourPoints/>', () => {
  it('should render', () => {
    const {getByText} = render(
      <YourPoints month="Diciembre" sumPoints="10,00.00" />,
    );
    expect(getByText(/Diciembre/)).toBeDefined();
    expect(getByText(/10,00.00/)).toBeDefined();
  });
});
