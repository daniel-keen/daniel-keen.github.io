<script setup lang="ts">
import '@/assets/content.css'
import List, { type ListItem } from '@/components/ListComponent.vue'
import { useAppsStore } from '@/store'

const apps = useAppsStore()
const products: ListItem[] = apps.products.map((product) => ({
  ...product,
  route: `/apps/${product.id}`
}))
</script>

<template>
  <List header="Apps" :items="products" />
</template>
