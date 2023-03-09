import React from 'react';
import {HeaderText} from './components/HeaderText';
import {globalStyles} from '../../shared/theme/globalStyles';
import {SafeAreaView} from 'react-native-safe-area-context';
import {YourPoints} from './components/YourPoints';

const HomeScreen = () => {
  return (
    <SafeAreaView style={globalStyles.container}>
      <HeaderText title="Bienvenido de vuelta!" subTitle="Ruben Rodriguez" />
      <YourPoints month="Diciembre" sumPoints="10,00.00" />
    </SafeAreaView>
  );
};

export default HomeScreen;
