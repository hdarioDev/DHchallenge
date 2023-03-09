import React from 'react';
import HeaderText from './components/HeaderText';
import {globalStyles} from '../../shared/theme/globalStyles';
import {SafeAreaView} from 'react-native-safe-area-context';

const HomeScreen = () => {
  return (
    <SafeAreaView style={globalStyles.container}>
      <HeaderText title="Bienvenido de vuelta!" subTitle="Ruben Rodriguez" />
    </SafeAreaView>
  );
};

export default HomeScreen;
