import React from 'react';
import {HeaderText} from './components/HeaderText';
import {globalStyles} from '../../shared/theme/globalStyles';
import {SafeAreaView} from 'react-native-safe-area-context';
import {YourPoints} from './components/YourPoints';
import {YourMovements} from './components/YourMovements';

const HomeScreen = () => {
  return (
    <SafeAreaView style={globalStyles.container}>
      <HeaderText title="Bienvenido de vuelta!" subTitle="Ruben Rodriguez" />
      <YourPoints month="Diciembre" sumPoints="10,00.00" />
      <YourMovements />
    </SafeAreaView>
  );
};

export default HomeScreen;
