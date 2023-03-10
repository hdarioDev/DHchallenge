import {Dimensions, FlatList, View} from 'react-native';
import React from 'react';
import {TitleGray} from '../../../../components/TitleGray';
import {styles} from './styles';
import {MovementsItem} from '../../../../components/MovementsItem';
import {Movement} from '../../../../../interfaces/movement';
import {CustomButton} from '../../../../components/CustomButton';
import {YourPoints} from '../YourPoints';
import useMovemets from '../../../../hooks/useMovemets';

const renderItem = ({item}: {item: Movement}) => (
  <MovementsItem movement={item} />
);

const YourMovements = () => {
  const {getSumPoints, items, filter, handleFilter} = useMovemets();
  console.log("  Dimensions.get('window') ", Dimensions.get('window').height);
  let styleHeight = {height: 350};
  if (Dimensions.get('window').height < 800) {
    styleHeight = {height: 290};
  }
  return (
    <>
      <YourPoints month="Diciembre" sumPoints={getSumPoints} />
      <TitleGray title="TUS MOVIMIENTOS" />
      <View style={{...styles.movementsContainer, ...styleHeight}}>
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
