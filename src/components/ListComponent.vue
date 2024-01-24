<script setup lang="ts">
import AppLink from '@/components/AppLink.vue'

export interface ListItem {
  title: string
  route: string
  thumbnail: string
}

export interface ListProps {
  header: string
  items: ListItem[]
}

const props = defineProps<ListProps>()
</script>

<template>
  <div class="grid">
    <article>
      <header>
        {{ header }}
      </header>
      <AppLink v-for="item in props.items" :key="item.route" :to="{ path: item.route }">
        <div class="item">
          <img class="thumbnail" :src="item.thumbnail" :alt="`${item.title} Thumbnail`" />
          {{ item.title }}
        </div>
      </AppLink>
    </article>
  </div>
</template>

<style scoped>
.item {
  margin-bottom: 1em;
  display: flex;
  flex-direction: row;
  align-items: center;
  vertical-align: middle;
}
</style>
