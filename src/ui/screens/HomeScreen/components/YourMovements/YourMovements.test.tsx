import React from 'react';
import {render} from '@testing-library/react-native';
import YourMovements from './YourMovements';

describe('<YourMovements />', () => {
  it('should render', () => {
    const {getByText} = render(<YourMovements />);
    expect(getByText('TUS MOVIMIENTOS')).toBeDefined();
  });
});
