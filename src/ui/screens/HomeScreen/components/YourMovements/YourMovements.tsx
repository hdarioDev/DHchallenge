import {FlatList, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {TitleGray} from '../../../../components/TitleGray';
import {styles} from './styles';
import {MovementsItem} from '../../../../components/MovementsItem';
import {Movement} from '../../../../../interfaces/movement';
import {CustomButton} from '../../../../components/CustomButton';
import {ItemService} from '../../../../../domain/services/ItemService';
import {ItemRepository} from '../../../../../infrastructure/ItemRepository';

const renderItem = ({item}: {item: Movement}) => (
  <MovementsItem movement={item} />
);

const YourMovements = () => {
  const [filter, setFilter] = useState(false);

  const handleFilter = () => {
    setFilter(!filter);
  };

  const [items, setItems] = useState<Movement[]>([]);

  useEffect(() => {
    const repository = new ItemRepository();
    const service = new ItemService(repository);
    service.getAll().then(data => setItems(data));
  }, []);

  return (
    <>
      <TitleGray title="TUS MOVIMIENTOS" />
      <View style={styles.movementsContainer}>
        <FlatList data={items} renderItem={renderItem} />
      </View>

      <View style={styles.buttonsContainer}>
        {filter ? (
          <>
            <CustomButton event={handleFilter} text="Todos" size="large" />
          </>
        ) : (
          <>
            <CustomButton event={handleFilter} text="Ganados" size="medium" />
            <CustomButton event={handleFilter} text="Canjeados" size="medium" />
          </>
        )}
      </View>
    </>
  );
};

export default YourMovements;
