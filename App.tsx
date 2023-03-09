import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigator from './src/ui/navigation/StackNavigator';

function App() {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}

export default App;
