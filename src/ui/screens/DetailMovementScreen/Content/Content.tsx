import {View, Text} from 'react-native';
import React from 'react';
import {TitleGray} from '../../../components/TitleGray';
import {styles} from './styles';

interface Props {
  date: string;
  points: number;
}

const Content = ({date, points}: Props) => {
  return (
    <View>
      <TitleGray title="Detalles del producto:" />
      <Text style={styles.desription}>{`Comprado el ${date}`}</Text>
      <TitleGray title="Con esta compra acumulaste:" />
      <Text style={styles.points}>{`${points} Puntos`}</Text>
    </View>
  );
};

export default Content;
