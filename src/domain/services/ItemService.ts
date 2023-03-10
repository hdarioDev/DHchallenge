import {Movement} from '../../interfaces/movement';
import {ItemRepository} from '../../infrastructure/ItemRepository';

export class ItemService {
  constructor(private readonly repository: ItemRepository) {}

  async getAll(): Promise<Movement[]> {
    return this.repository.getAll();
  }
}
