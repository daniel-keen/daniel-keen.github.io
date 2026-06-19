<script setup lang="ts">
import { RouterView, useRoute } from 'vue-router'
import AuroraBackground from '@/components/AuroraBackground.vue'
import SiteHeader from '@/components/SiteHeader.vue'

const route = useRoute()
</script>

<template>
  <AuroraBackground />
  <SiteHeader v-if="route.name !== 'home'" />
  <RouterView />
</template>
