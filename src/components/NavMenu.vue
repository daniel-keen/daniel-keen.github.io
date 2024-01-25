<script setup lang="ts">
import '@/assets/menu.css'
import AppLink from '@/components/AppLink.vue'
import { ref } from 'vue'

const iconSize = ref('lg')
const menuItems = [
  { to: '/games', class: 'games', icon: ['fas', 'gamepad'], tooltip: 'Games', color: '#242424' },
  { to: '/apps', class: 'apps', icon: ['fab', 'app-store-ios'], tooltip: 'Apps', color: '#242424' },
  {
    to: '/music',
    class: 'music',
    icon: ['fas', 'music'],
    tooltip: 'Music',
    color: '#121212'
  },
  {
    to: 'https://www.instagram.com/quacking_of_the_ducks',
    class: 'drawings',
    icon: ['fab', 'instagram'],
    tooltip: 'Artfolio',
    color: '#f1f1f1'
  }
]
</script>

<template>
  <div class="menu">
    <AppLink
      v-for="item in menuItems"
      :key="item.to"
      :class="item.class"
      class="menu-item"
      :to="item.to"
    >
      <font-awesome-icon class="menu-icon" :icon="item.icon" :size="iconSize" :color="item.color" />
      <a class="tooltip-hint"></a>
    </AppLink>
  </div>
</template>

<style scoped>
.menu {
  display: flex;
  margin-left: auto;
}
</style>