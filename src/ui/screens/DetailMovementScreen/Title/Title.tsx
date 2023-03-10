import {View, Text} from 'react-native';
import React from 'react';
import {styles} from './styles';

interface Props {
  text: string;
}

const DetailTitle = ({text}: Props) => {
  return (
    <View>
      <Text style={styles.title}>{text}</Text>
    </View>
  );
};

export default DetailTitle;
