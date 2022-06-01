import { AxiosRequestConfig } from 'axios';
import { PRODUCTS } from '../constants/endpoints';
import { ProductRegisterType, ProductUpdateType } from '../types/productType';
import { api } from './api';

const { get, delete: destroy, post, patch } = api;

export const productService = {
  index: async () => {
    try {
      const res = await get(`${PRODUCTS}`);
      return res.data.result;
    } catch (err) {
      console.error(err);
    }
  },
  create: (product: ProductRegisterType, config?: AxiosRequestConfig) =>
    post(`${PRODUCTS}`, product, config),
  update: ({ id, ...rest }: ProductUpdateType, config?: AxiosRequestConfig) =>
    patch(`${PRODUCTS}/${id}`, rest, config),
  single: (id: string, config?: AxiosRequestConfig) => get(`${PRODUCTS}/${id}`, config),
  remove: (id: number, config?: AxiosRequestConfig) => destroy(`${PRODUCTS}/${id}`, config)
};
