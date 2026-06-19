<script setup lang="ts">
import AppLink from '@/components/AppLink.vue'
import SocialLinks from '@/components/SocialLinks.vue'
import avatar from '@/assets/images/avatar.png'

const navItems = [
  { label: 'Games', to: '/games' },
  { label: 'Music', to: '/music' },
  { label: 'Art', to: '/art' },
  { label: 'About', to: '/about' }
]
</script>

<template>
  <header class="site-header">
    <AppLink to="/" class="brand" aria-label="Home">
      <img class="brand-img" :src="avatar" alt="Daniel Keen" width="40" height="40" />
    </AppLink>
    <nav class="site-nav">
      <AppLink v-for="item in navItems" :key="item.label" :to="item.to" class="nav-link">{{
        item.label
      }}</AppLink>
    </nav>
    <div class="header-socials"><SocialLinks /></div>
  </header>
</template>

<style scoped>
.site-header {
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  gap: 24px;
  max-width: 980px;
  margin: 0 auto;
  padding: 22px 24px;
}

/* style the <img> directly — it's slot content authored here, so it carries
   this component's scope. (AppLink uses inheritAttrs:false, so a selector that
   depends on scope landing on .brand would not match its internal router-link.) */
.brand-img {
  display: block;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  border: 1px solid rgba(233, 234, 236, 0.3);
  transition: box-shadow 0.2s;
}
.brand-img:hover {
  box-shadow: 0 0 18px rgba(150, 60, 180, 0.6);
}

.site-nav {
  display: flex;
  gap: 22px;
  margin-left: auto;
  flex-wrap: wrap;
}
.site-nav :deep(.nav-link) {
  color: rgba(233, 234, 236, 0.85);
  text-decoration: none;
  font-size: 15px;
  padding-bottom: 3px;
  border-bottom: 1px solid transparent;
  transition: color 0.2s, border-color 0.2s;
}
.site-nav :deep(.nav-link:hover),
.site-nav :deep(.router-link-active) {
  color: #fff;
  border-color: rgba(233, 234, 236, 0.6);
}

.header-socials {
  display: flex;
  align-items: center;
}
.header-socials :deep(.social-links) {
  display: flex;
  align-items: center;
  gap: 16px;
  margin: 0;
  list-style: none;
}
.header-socials :deep(.social-links li),
.header-socials :deep(.social-links a) {
  display: flex;
  align-items: center;
}
.header-socials :deep(.social-links a) {
  color: rgba(170, 176, 190, 0.85);
}
/* block SVG removes FontAwesome's baseline offset so the icon centers on the row */
.header-socials :deep(.social-links svg) {
  display: block;
}
.header-socials :deep(.social-links a:hover) {
  color: #e6c879;
}

@media (max-width: 640px) {
  .site-header {
    flex-wrap: wrap;
    gap: 14px;
    justify-content: center;
  }
  .site-nav {
    margin-left: 0;
    gap: 18px;
    justify-content: center;
    order: 3;
    width: 100%;
  }
}
</style>
