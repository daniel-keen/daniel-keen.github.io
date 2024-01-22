import { defineStore } from 'pinia';
import type { Product } from '../ProductType';
import type { ProductState } from './ProductState';
import { generateProduct } from '../GenerateProduct';

const BasePath = '/public/products/apps';

const products: Product[] = [
  generateProduct('meme-locker', 
    'Meme Locker',
    `${BasePath}/meme-locker`,
    'https://apps.apple.com/us/app/meme-locker/id6449864451',
    'https://play.google.com/store/apps/details?id=com.YellDuck.MemeLocker'),
];

export const useAppsStore = defineStore({
  id: 'apps',
  state: (): ProductState => ({
    products,
  }),

  actions: {},
});