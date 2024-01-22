import { createPinia } from 'pinia';
import {useGamesStore} from './modules/games';
import {useAppsStore} from './modules/apps';

export const pinia = createPinia();

pinia.use(() => useGamesStore());
pinia.use(() => useAppsStore());

export { useGamesStore, useAppsStore };
