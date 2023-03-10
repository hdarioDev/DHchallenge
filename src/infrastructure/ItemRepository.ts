import {Movement} from '../interfaces/movement';
import {getAllItems} from './api';

export class ItemRepository {
  async getAll(): Promise<Movement[]> {
    const data = await getAllItems();
    return data.map((item: any) => ({
      createdAt: item.createdAt,
      product: item.product,
      points: item.points,
      image: item.image,
      is_redemption: item.is_redemption,
      id: item.id,
    }));
  }
}
