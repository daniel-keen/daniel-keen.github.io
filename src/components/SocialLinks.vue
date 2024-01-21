<script setup lang="ts">
const size = 'lg'

const socialLinks = [
  { href: 'https://twitter.com/the_daniel_keen', icon: ['fab', 'twitter'], size },
  { href: 'https://github.com/daniel-keen', icon: ['fab', 'github'], size: 'lg' },
  { href: 'https://www.linkedin.com/in/daniel-nadkin/', icon: ['fab', 'linkedin'], size },
  { href: 'https://www.instagram.com/the_daniel_keen/', icon: ['fab', 'instagram'], size }
]
</script>

<template>
  <ul>
    <li v-for="link in socialLinks" :key="link.href">
      <a target="_blank" rel="noopener noreferrer" :href="link.href">
        <font-awesome-icon :icon="link.icon" :size="link.size" />
      </a>
    </li>
  </ul>
</template>
