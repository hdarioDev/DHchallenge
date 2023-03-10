import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {Movement} from '../../../interfaces/movement';
import {formattedDate} from '../../../utils/dates';
import {useNavigation} from '@react-navigation/native';

interface Props {
  movement: Movement;
}

const MovementsItem = ({movement}: Props) => {
  const navigation = useNavigation<any>();

  return (
    <TouchableOpacity
      testID="item-container"
      style={styles.itemContainer}
      onPress={() => navigation.navigate('Detail', movement)}>
      <Image
        source={{
          uri: movement.image,
        }}
        style={styles.imageItem}
      />
      <View style={styles.item}>
        <Text style={styles.itemTitle}>{movement.product}</Text>
        <Text style={styles.itemDate}>{formattedDate(movement.createdAt)}</Text>
      </View>
      <View style={styles.itemPoint}>
        <Text style={movement.is_redemption ? styles.minus : styles.plus}>
          {movement.is_redemption ? '-' : '+'}
        </Text>
        <Text style={styles.itemPointValue}>{movement.points}</Text>
      </View>
      <View>
        <Text style={styles.itemIcon}>&gt;</Text>
      </View>
    </TouchableOpacity>
  );
};

export default MovementsItem;
