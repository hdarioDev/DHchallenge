import {View, Image} from 'react-native';
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
        style={styles.image}
        testID="image-component"
      />
    </View>
  );
};

export default ImageDetail;
