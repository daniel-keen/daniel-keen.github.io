<script setup lang="ts">
import '@/assets/content.css'
import List, { type ListItem } from '@/components/ListComponent.vue'
import { useGamesStore } from '@/store/index'

const gamesStore = useGamesStore()
const items: ListItem[] = gamesStore.games.map((game) => ({
  title: game.title,
  route: `/games/${game.id}`,
  thumbnail: game.thumbnail
}))
</script>

<template>
  <List header="Games" :items="items" />
</template>
