import {View, Text} from 'react-native';
import React from 'react';
import {TitleGray} from '../../../components/TitleGray';
import {styles} from './styles';
import {CustomButton} from '../../../components/CustomButton';
import {formattedDate} from '../../../../utils/dates';

interface Props {
  date: string;
  points: number;
}

const Content = ({date, points}: Props) => {
  return (
    <View>
      <TitleGray title="Detalles del producto:" />
      <Text style={styles.desription}>{`Comprado el ${formattedDate(
        date,
      )}`}</Text>
      <TitleGray title="Con esta compra acumulaste:" />
      <Text style={styles.points}>{`${points} Puntos`}</Text>
      <CustomButton text="Aceptar" size="large" />
    </View>
  );
};

export default Content;
