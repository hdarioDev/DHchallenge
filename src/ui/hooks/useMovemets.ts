import {useEffect, useState} from 'react';
import {ItemService} from '../../domain/services/ItemService';
import {ItemRepository} from '../../infrastructure/ItemRepository';
import {Movement} from '../../interfaces/movement';

const useMovemets = () => {
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
  return {
    getSumPoints,
    items,
    filter,
    handleFilter,
  };
};

export default useMovemets;
