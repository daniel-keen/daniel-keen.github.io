<script setup lang="ts">
import AppLink from '@/components/AppLink.vue'
import SocialLinks from '@/components/SocialLinks.vue'
import avatar from '@/assets/images/avatar.png'

const navItems = [
  { label: 'Games & Apps', to: '/games' },
  { label: 'Music', to: '/music' },
  { label: 'Art', to: '/art' },
  { label: 'About', to: '/about' }
]
</script>

<template>
  <main class="hero">
    <img class="avatar" :src="avatar" alt="Daniel Keen" width="84" height="84" />
    <a
      class="latin"
      href="https://simple.wikipedia.org/wiki/Per_aspera_ad_astra"
      target="_blank"
      rel="noopener"
      data-tooltip="Through hardships to the stars"
      >Per Aspera Ad Astra</a
    >
    <h1>Daniel Keen</h1>
    <p class="lede">
      Unity developer, 10+ years. Apps and games across iOS, Android, Windows &amp; macOS. Music and
      drawing on the side.
    </p>
    <nav class="nav">
      <AppLink v-for="item in navItems" :key="item.label" :to="item.to" class="nav-link">{{
        item.label
      }}</AppLink>
    </nav>
    <div class="socials"><SocialLinks /></div>
  </main>
</template>

<style scoped>
.hero {
  position: relative;
  z-index: 1;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 32px;
}
.avatar {
  width: 84px;
  height: 84px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 22px;
  border: 1px solid rgba(233, 234, 236, 0.35);
  box-shadow: 0 0 24px rgba(150, 60, 180, 0.45);
}
.latin {
  font-size: 12px;
  letter-spacing: 0.26em;
  text-transform: uppercase;
  color: rgba(236, 237, 240, 0.85);
  text-decoration: none;
  text-shadow: 0 1px 12px rgba(0, 0, 0, 0.6);
  margin-bottom: 18px;
}
.latin:hover {
  color: #e6c879;
}
h1 {
  font-size: clamp(38px, 7vw, 68px);
  margin: 0 0 12px;
  font-weight: 600;
  letter-spacing: -0.025em;
  color: #f4f0f7;
  text-shadow: 0 2px 18px rgba(0, 0, 0, 0.7), 0 0 60px rgba(0, 0, 0, 0.5);
}
.lede {
  max-width: 46ch;
  color: rgba(222, 226, 233, 0.92);
  margin: 0 auto 30px;
  font-size: clamp(14px, 1.6vw, 16px);
  text-shadow: 0 1px 14px rgba(0, 0, 0, 0.6);
}
.nav {
  display: flex;
  gap: 28px;
  flex-wrap: wrap;
  justify-content: center;
}
.nav :deep(.nav-link) {
  color: #e9eaec;
  text-decoration: none;
  font-size: 15px;
  padding-bottom: 4px;
  border-bottom: 1px solid transparent;
  transition: border-color 0.2s;
}
.nav :deep(.nav-link:hover) {
  border-color: rgba(233, 234, 236, 0.6);
}
.socials {
  margin-top: 34px;
}
.socials :deep(.social-links) {
  display: flex;
  gap: 18px;
  margin: 0;
  padding: 0;
  list-style: none;
  justify-content: center;
}
.socials :deep(.social-links a) {
  color: rgba(170, 176, 190, 0.85);
}
.socials :deep(.social-links a:hover) {
  color: #e6c879;
}
</style>
