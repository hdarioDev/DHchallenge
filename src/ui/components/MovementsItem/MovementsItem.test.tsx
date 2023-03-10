import React from 'react';
import {render} from '@testing-library/react-native';
import MovementsItem from './MovementsItem';
import {movement} from '../../../utils/factories';

describe('<MovementsItem />', () => {
  it('should render the properties', () => {
    const {getByText} = render(<MovementsItem movement={movement} />);
    expect(getByText(/Example/)).toBeDefined();
    expect(getByText(/1 de marzo, 2021/)).toBeDefined();
    expect(getByText('+')).toBeDefined();
    expect(getByText(/100/)).toBeDefined();
    expect(getByText('>')).toBeDefined();
  });
});
