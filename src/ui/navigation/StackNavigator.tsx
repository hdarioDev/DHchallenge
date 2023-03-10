// import 'react-native-gesture-handler';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen} from '../screens/HomeScreen';
import {colors} from '../shared/theme/colors';
import {DetailMovementScreen} from '../screens/DetailMovementScreen';
import {Movement} from '../../interfaces/movement';

const Stack = createNativeStackNavigator();

export type RootStackParams = {
  Home: undefined;
  Detail: Movement;
};

const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        headerShadowVisible: false,
        contentStyle: {
          backgroundColor: colors.background,
        },
      }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Detail" component={DetailMovementScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
