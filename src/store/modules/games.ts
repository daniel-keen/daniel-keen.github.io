import { defineStore } from 'pinia';
import type { Product } from '../ProductType';
import type { ProductState } from './ProductState';
import { generateProduct } from '../GenerateProduct';

const BasePath = '/src/assets/products/games';

const products: Product[] = [
  generateProduct('block-line-up', 
    'Block Line Up',
    `${BasePath}/block-line-up`,
    'https://apps.apple.com/us/app/block-line-up/id6446652739',
    'https://play.google.com/store/apps/details?id=com.YellDuck.BlockBash'),
];

export const useGamesStore = defineStore({
  id: 'games',
  state: (): ProductState => ({
    products,
  }),

  actions: {},
});