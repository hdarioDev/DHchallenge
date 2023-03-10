import {TouchableOpacity, Text} from 'react-native';

import React from 'react';
import {styles} from './styles';

interface Props {
  text: string;
  size: 'large' | 'medium';
  event?: (typeFilter: string) => void;
}

const CustomButton = ({text, size, event}: Props) => {
  const widthButton = size === 'large' ? 353 : 170;
  return (
    <TouchableOpacity
      onPress={event}
      style={{...styles.button, width: widthButton}}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
