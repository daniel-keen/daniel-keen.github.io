import { useAppsStore, useGamesStore } from "@/store"

export const getStoreByRouteParam = (param: string) => {
    const games = useGamesStore()
    const apps = useAppsStore()
    if (games.products.some(({id}) => id === param)) {
        return games
    }
    return apps
}