<script setup lang="ts">
import '@/assets/content.css'
import List, { type ListItem } from '@/components/ListComponent.vue'

const items: ListItem[] = [
  {
    title: 'Meme Locker',
    route: '/apps/meme-locker',
    thumbnail: new URL('@/assets/images/apps/meme-locker/icon.png', import.meta.url).toString()
  }
]
</script>

<template>
  <List header="Apps" :items="items" />
</template>
