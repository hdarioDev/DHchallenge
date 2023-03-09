import {View, Text} from 'react-native';
import React from 'react';
import {styles} from './styles';

interface Props {
  title: string;
}

const TitleGray = ({title}: Props) => {
  return (
    <View>
      <Text style={styles.pointsTitle}>{title}</Text>
    </View>
  );
};

export default TitleGray;
