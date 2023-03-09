import {View, Text, Platform} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {TitleGray} from '../../../../components/TitleGray';

interface Props {
  month: string;
  sumPoints: string;
}

const YourPoints = ({month, sumPoints}: Props) => {
  return (
    <View>
      <TitleGray title="TUS PUNTOS" />
      {Platform.OS === 'android' && (
        <View style={{...styles.cardContainerShadow}} />
      )}
      <View style={{...styles.cardContainer}}>
        <Text style={styles.cardTitle}>{month}</Text>
        <View style={styles.cardContentPoints}>
          <Text style={styles.cardPoints}>{sumPoints} pts </Text>
        </View>
      </View>
    </View>
  );
};

export default YourPoints;
