import React from 'react';
import {render} from '@testing-library/react-native';
import {NavigationContainer} from '@react-navigation/native';
import YourMovements from './YourMovements';

describe('<YourMovements />', () => {
  it('should render', () => {
    const {getByText} = render(
      <NavigationContainer>
        <YourMovements />
      </NavigationContainer>,
    );
    expect(getByText('TUS MOVIMIENTOS')).toBeDefined();
  });
});
