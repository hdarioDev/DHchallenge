import {TouchableOpacity, Text, Dimensions} from 'react-native';

import React from 'react';
import {styles} from './styles';

interface Props {
  text: string;
  size: 'large' | 'medium';
  event?: (typeFilter: string) => void;
}

const CustomButton = ({text, size, event}: Props) => {
  console.log('Dimensions', Dimensions.get('window').width);

  let widthButton = size === 'large' ? 353 : 170;
  if (Dimensions.get('window').width < 390) {
    widthButton = size === 'large' ? Dimensions.get('window').width - 40 : 150;
  }

  return (
    <TouchableOpacity
      onPress={event}
      style={{...styles.button, width: widthButton}}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
