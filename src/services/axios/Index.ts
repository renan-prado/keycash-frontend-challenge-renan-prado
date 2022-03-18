/* eslint-disable class-methods-use-this */
import axiosInstance from './AxiosInstance';
import { IService } from '../types';

class AxiosService implements IService {
  async search<IServiceResponse>(url: string): Promise<IServiceResponse[]> {
    const { data } = await axiosInstance.get<IServiceResponse[]>(url);
    return data;
  }
}

export default AxiosService;
