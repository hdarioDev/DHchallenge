import {FlatList, View} from 'react-native';
import React from 'react';
import {TitleGray} from '../../../../components/TitleGray';
import {styles} from './styles';
import {MovementsItem} from '../../../../components/MovementsItem';
import {Movement} from '../../../../../interfaces/movement';

const movements: Movement[] = [
  {
    createdAt: '2021-03-01T00:00:00.000Z',
    product: 'Producto 1',
    points: 100,

    image:
      'https://post.healthline.com/wp-content/uploads/2020/10/698694-Walmart-Grocery-Delivery_-Everything-You-Need-to-Know-1296x728-header_body.jpg',
    is_redemption: false,
    id: '1',
  },
  {
    createdAt: '2021-03-01T00:00:00.000Z',
    product: 'Producto 2',
    points: 100,

    image:
      'https://post.healthline.com/wp-content/uploads/2020/10/698694-Walmart-Grocery-Delivery_-Everything-You-Need-to-Know-1296x728-header_body.jpg',
    is_redemption: true,
    id: '2',
  },
];

const renderItem = ({item}: {item: Movement}) => (
  <MovementsItem movement={item} />
);

const YourMovements = () => {
  return (
    <>
      <TitleGray title="TUS MOVIMIENTOS" />
      <View style={styles.movementsContainer}>
        <FlatList data={movements} renderItem={renderItem} />
      </View>
    </>
  );
};

export default YourMovements;
