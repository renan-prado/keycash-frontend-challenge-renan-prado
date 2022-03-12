import { IService } from '../services/types';

export interface IHouseRepository {
  service: IService
  search: <T>() => Promise<T[]>
}
