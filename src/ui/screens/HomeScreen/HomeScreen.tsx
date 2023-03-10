import React from 'react';
import {HeaderText} from './components/HeaderText';
import {globalStyles} from '../../shared/theme/globalStyles';
import {SafeAreaView} from 'react-native-safe-area-context';
import {YourMovements} from './components/YourMovements';

const HomeScreen = () => {
  return (
    <SafeAreaView style={globalStyles.container}>
      <HeaderText title="Bienvenido de vuelta!" subTitle="Ruben Rodriguez" />
      <YourMovements />
    </SafeAreaView>
  );
};
export default HomeScreen;
