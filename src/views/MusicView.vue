<script setup lang="ts">
type Platform = {
  name: string
  icon: [string, string]
  url: string
  handle: string
}

const platforms: Platform[] = [
  { name: 'YouTube', icon: ['fab', 'youtube'], url: 'https://www.youtube.com/@daniel_keen', handle: '@daniel_keen' },
  { name: 'SoundCloud', icon: ['fab', 'soundcloud'], url: 'https://soundcloud.com/daniel_keen', handle: 'daniel_keen' },
  { name: 'Telegram', icon: ['fab', 'telegram'], url: 'https://t.me/random_tunes', handle: 'random_tunes' }
]
</script>

<template>
  <div class="page">
    <section class="card">
      <span class="eyebrow">Sound</span>
      <h1>Music</h1>
      <p>
        Tracks I compose between projects. Listen wherever you like — new things land now and then.
      </p>
      <ul class="platforms">
        <li v-for="p in platforms" :key="p.name">
          <a class="btn platform" :class="p.name.toLowerCase()" :href="p.url" target="_blank" rel="noopener">
            <font-awesome-icon class="icon" :icon="p.icon" size="lg" />
            <span class="name">{{ p.name }}</span>
            <span class="handle">{{ p.handle }}</span>
            <span class="arrow">↗</span>
          </a>
        </li>
      </ul>
    </section>
  </div>
</template>

<style scoped>
.platforms {
  list-style: none;
  margin: 8px 0 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.platform {
  width: 100%;
}
.platform .name {
  font-weight: 500;
}
.platform .handle {
  margin-left: auto;
  color: var(--aur-muted);
  font-size: 13px;
}
.platform .arrow {
  color: var(--aur-muted);
  font-size: 13px;
}

/* per-platform accent on hover */
.platform.youtube:hover {
  border-color: #ff4d4d;
  box-shadow: 0 0 22px rgba(255, 0, 0, 0.25);
}
.platform.youtube:hover .icon {
  color: #ff4d4d;
}
.platform.soundcloud:hover {
  border-color: #ff8800;
  box-shadow: 0 0 22px rgba(255, 136, 0, 0.25);
}
.platform.soundcloud:hover .icon {
  color: #ff8800;
}
.platform.telegram:hover {
  border-color: #2ca5e0;
  box-shadow: 0 0 22px rgba(0, 136, 204, 0.25);
}
.platform.telegram:hover .icon {
  color: #2ca5e0;
}
</style>
