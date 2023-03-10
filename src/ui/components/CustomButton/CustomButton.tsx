import {TouchableOpacity, Text} from 'react-native';

import React from 'react';
import {styles} from './styles';

interface Props {
  text: string;
  size: 'large' | 'medium';
  setFilter?: () => void;
}

const CustomButton = ({text, size, setFilter}: Props) => {
  const widthButton = size === 'large' ? 353 : 170;
  return (
    <TouchableOpacity
      onPress={setFilter}
      style={{...styles.button, width: widthButton}}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
