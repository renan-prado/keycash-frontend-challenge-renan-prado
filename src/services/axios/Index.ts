/* eslint-disable class-methods-use-this */
import axiosInstance from './AxiosInstance';
import { IService } from '../types';

const URL_API = 'http://5e148887bce1d10014baea80.mockapi.io/keycash/challenge';

class AxiosService implements IService {
  async search<IServiceResponse>(): Promise<IServiceResponse[]> {
    const { data } = await axiosInstance.get<IServiceResponse[]>(URL_API);
    return data;
  }
}

export default AxiosService;
