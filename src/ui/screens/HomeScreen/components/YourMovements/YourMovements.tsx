import {FlatList, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {TitleGray} from '../../../../components/TitleGray';
import {styles} from './styles';
import {MovementsItem} from '../../../../components/MovementsItem';
import {Movement} from '../../../../../interfaces/movement';
import {CustomButton} from '../../../../components/CustomButton';
import {ItemService} from '../../../../../domain/services/ItemService';
import {ItemRepository} from '../../../../../infrastructure/ItemRepository';
import {YourPoints} from '../YourPoints';

const renderItem = ({item}: {item: Movement}) => (
  <MovementsItem movement={item} />
);

const YourMovements = () => {
  const [filter, setFilter] = useState(false);
  const [items, setItems] = useState<Movement[]>([]);
  const [allItems, setAllItems] = useState<Movement[]>([]);

  const handleFilter = (typeFilter: string) => {
    if (typeFilter === 'ganados') {
      const filteredData = allItems.filter(item => item.is_redemption);
      setItems(filteredData);
    } else if (typeFilter === 'canjeados') {
      const filteredData = allItems.filter(item => !item.is_redemption);
      setItems(filteredData);
    } else {
      setItems(allItems);
    }
    setFilter(!filter);
  };

  useEffect(() => {
    const repository = new ItemRepository();
    const service = new ItemService(repository);
    service.getAll().then(data => {
      setItems(data);
      setAllItems(data);
    });
  }, []);

  const getSumPoints = allItems.reduce((acc, item) => {
    return item.is_redemption ? acc - item.points : acc + item.points;
  }, 0);

  return (
    <>
      <YourPoints month="Diciembre" sumPoints={getSumPoints} />
      <TitleGray title="TUS MOVIMIENTOS" />
      <View style={styles.movementsContainer}>
        <FlatList data={items} renderItem={renderItem} />
      </View>
      <View style={styles.buttonsContainer}>
        {filter ? (
          <>
            <CustomButton
              event={() => handleFilter('todos')}
              text="Todos"
              size="large"
            />
          </>
        ) : (
          <>
            <CustomButton
              event={() => handleFilter('ganados')}
              text="Ganados"
              size="medium"
            />
            <CustomButton
              event={() => handleFilter('canjeados')}
              text="Canjeados"
              size="medium"
            />
          </>
        )}
      </View>
    </>
  );
};

export default YourMovements;
