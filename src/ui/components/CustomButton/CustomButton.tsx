import {TouchableOpacity, Text} from 'react-native';

import React from 'react';
import {styles} from './styles';

interface Props {
  text: string;
  size: 'large' | 'medium';
}

const CustomButton = ({text, size}: Props) => {
  const widthButton = size === 'large' ? 353 : 170;
  return (
    <TouchableOpacity style={{...styles.button, width: widthButton}}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
