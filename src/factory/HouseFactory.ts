import AxiosService from '@/services/axios/Index';
import HouseRepository from '@/repository/HouseRepository';
import { IHouseRepository } from '@/repository/types';

class HouseFactory {
  static createInstance(): IHouseRepository {
    const serviceInstance = new AxiosService();
    const houseRepository = new HouseRepository({ serviceInstance });

    return houseRepository;
  }
}

export default HouseFactory;
