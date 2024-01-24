<script setup lang="ts">
import AppLink from './AppLink.vue'
</script>

<template>
  <ul>
    <li>
      <AppLink to="/"><img class="logo" src="@/assets/images/logo.png" /></AppLink>
    </li>
  </ul>
</template>

<style scoped>
.logo {
  overflow: hidden;
  width: 7vh;
  height: 7vh;
  border-radius: 50%;
  border-width: 1px;
  border-color: white;
  border-style: solid;
}

.logo:hover {
  box-shadow: 0 0 15px white;
}
</style>
