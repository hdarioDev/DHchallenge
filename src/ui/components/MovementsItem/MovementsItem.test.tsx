import React from 'react';
import {render} from '@testing-library/react-native';
import MovementsItem from './MovementsItem';
import {movement} from '../../../utils/factories';
import {NavigationContainer} from '@react-navigation/native';

describe('<MovementsItem />', () => {
  it('should render the properties', () => {
    const {getByText} = render(
      <NavigationContainer>
        <MovementsItem movement={movement} />
      </NavigationContainer>,
    );
    expect(getByText(/Example/)).toBeDefined();
    expect(getByText(/1 de marzo, 2021/)).toBeDefined();
    expect(getByText('+')).toBeDefined();
    expect(getByText(/100/)).toBeDefined();
    expect(getByText('>')).toBeDefined();
  });
});
