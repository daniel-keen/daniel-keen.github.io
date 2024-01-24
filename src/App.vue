<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavMenu from '@/components/NavMenu.vue'
import SocialLinks from './components/SocialLinks.vue'
import LogoComponent from './components/LogoComponent.vue'
</script>

<template>
  <main class="container">
    <header>
      <nav class="header">
        <LogoComponent />
        <NavMenu />
        <SocialLinks />
      </nav>
    </header>
    <RouterView />
  </main>
</template>

<style scoped>
.header {
  display: flex;
  flex-wrap: wrap;
  gap: 2vw;
}
</style>