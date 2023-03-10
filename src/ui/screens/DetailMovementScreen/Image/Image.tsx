import {View, Image, Dimensions} from 'react-native';
import React from 'react';
import {styles} from './styles';

interface Props {
  img: string;
}

const ImageDetail = ({img}: Props) => {
  return (
    <View style={styles.shadow}>
      <Image
        source={{
          uri: img,
        }}
        style={{...styles.image, width: Dimensions.get('window').width - 40}}
        testID="image-component"
      />
    </View>
  );
};

export default ImageDetail;
