import { defineStore } from 'pinia';
import type { Product } from '../ProductType';

interface GamesState {
  games: Product[];
}

const games: Product[] = [
  {
    id: 'block-line-up',
    title: 'Block Line Up',
    shortDescription: 'Fill up lines strategically in Block Line Up, the addictive puzzle game that challenges your brain. Download now and become a Line-Up Legend!',
    longDescription: 'Challenge your brain with Block Line Up, the addictive puzzle game that will keep you coming back for more! With a grid of 9 by 9 squares and a variety of block shapes to choose from, you&#39;ll need to think strategically to fill up lines either vertically or horizontally. The fast-paced gameplay and simple controls make it easy to get started, but hard to master. With endless levels and increasing difficulty, Block Line Up will keep you entertained for hours. Download now and become a Line-Up Legend!',
    iosLink: 'https://apps.apple.com/us/app/block-line-up/id6446652739',
    androidLink: 'https://play.google.com/store/apps/details?id=com.YellDuck.BlockBash',
    privacyPolicy: '',
    thumbnail: '/src/assets/images/games/block-line-up/icon.png',
  },
]

export const useGamesStore = defineStore({
  id: 'games',
  state: (): GamesState => ({
    games,
  }),

  actions: {},
});