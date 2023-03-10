import React from 'react';
import {RootStackParams} from '../../navigation/StackNavigator';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {SafeAreaView} from 'react-native-safe-area-context';
import {globalStyles} from '../../shared/theme/globalStyles';
import {Title} from './Title';
import {Image} from './Image';
import {Content} from './Content';

interface Props extends NativeStackScreenProps<RootStackParams, 'Detail'> {}

const DetailMovementScreen = ({route}: Props) => {
  const params = route.params;

  return (
    <SafeAreaView style={globalStyles.container}>
      <Title text={params.product} />
      <Image img={params.image} />
      <Content date={params.createdAt} points={params.points} />
    </SafeAreaView>
  );
};

export default DetailMovementScreen;
