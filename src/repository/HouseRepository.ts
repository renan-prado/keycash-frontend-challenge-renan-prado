import { IService } from '../services/types';
import { IHouseRepository } from './types';

class HouseRepository implements IHouseRepository {
  service: IService;

  constructor({ serviceInstance }: { serviceInstance: IService}) {
    this.service = serviceInstance;
  }

  async search<IRepositoryResponse>(): Promise<IRepositoryResponse[]> {
    const houses = await this.service.search<IRepositoryResponse>();
    return houses;
  }
}

export default HouseRepository;
