import {View, Text} from 'react-native';
import React from 'react';
import {TitleGray} from '../../../components/TitleGray';
import {styles} from './styles';
import {CustomButton} from '../../../components/CustomButton';
import {formattedDate} from '../../../../utils/dates';
import {useNavigation} from '@react-navigation/native';

interface Props {
  date: string;
  points: number;
}

const Content = ({date, points}: Props) => {
  const navigation = useNavigation<any>();

  const handleNavigate = () => {
    navigation.navigate('Home');
  };

  return (
    <View>
      <TitleGray title="Detalles del producto:" />
      <Text style={styles.desription}>{`Comprado el ${formattedDate(
        date,
      )}`}</Text>
      <TitleGray title="Con esta compra acumulaste:" />
      <Text style={styles.points}>{`${points} Puntos`}</Text>
      <CustomButton text="Aceptar" size="large" event={handleNavigate} />
    </View>
  );
};

export default Content;
