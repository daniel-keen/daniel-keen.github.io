<script setup lang="ts">
import '@/assets/content.css'
import List, { type ListItem } from '@/components/ListComponent.vue'
import { useGamesStore } from '@/store/index'

const games = useGamesStore()
const products: ListItem[] = games.products.map((product) => ({
  title: product.title,
  route: `/games/${product.id}`,
  thumbnail: product.thumbnail
}))
</script>

<template>
  <List header="Games" :items="products" />
</template>
