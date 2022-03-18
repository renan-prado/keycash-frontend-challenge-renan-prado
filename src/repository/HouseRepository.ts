import { IService } from '../services/types';
import { IHouseRepository } from './types';

const URL_API = 'http://5e148887bce1d10014baea80.mockapi.io/keycash/challenge';

class HouseRepository implements IHouseRepository {
  service: IService;

  constructor({ serviceInstance }: { serviceInstance: IService}) {
    this.service = serviceInstance;
  }

  async search<IRepositoryResponse>(): Promise<IRepositoryResponse[]> {
    const houses = await this.service.search<IRepositoryResponse>(URL_API);
    return houses;
  }
}

export default HouseRepository;
