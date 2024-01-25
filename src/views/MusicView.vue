<script setup lang="ts">
type SocialMediaLink = {
  name: string
  icon: [string, string]
  url: string
  hover?: boolean
}

const socialMediaLinks: SocialMediaLink[] = [
  {
    name: 'Spotify',
    icon: ['fab', 'spotify'],
    url: 'https://open.spotify.com/artist/3qe75mgWNfGDJZTrAy70CJ'
  },
  {
    name: 'YouTube',
    icon: ['fab', 'youtube'],
    url: 'https://www.youtube.com/@daniel_keen'
  },
  { name: 'SoundCloud', icon: ['fab', 'soundcloud'], url: 'https://soundcloud.com/daniel_keen' },
  { name: 'Telegram', icon: ['fab', 'telegram'], url: 'https://t.me/random_tunes' }
]

const handleHover = (index: number): void => {
  socialMediaLinks[index].hover = !socialMediaLinks[index].hover
}
</script>

<template>
  <main class="container">
    <article>
      <header>Music</header>
      <body>
        <ul class="content">
          <li v-for="(socialMedia, index) in socialMediaLinks" :key="index">
            <a
              :href="socialMedia.url"
              target="_blank"
              :class="[socialMedia.hover ? 'hover' : '', 'outline', socialMedia.name.toLowerCase()]"
              @mouseover="handleHover(index)"
              @mouseout="handleHover(index)"
            >
              <font-awesome-icon class="icon" :icon="socialMedia.icon" size="lg" />
              {{ socialMedia.name }}
            </a>
          </li>
        </ul>
      </body>
    </article>
  </main>
</template>

<style scoped>
li {
  list-style-type: none;
}

.outline {
  text-decoration: none;
  transition:
    border-color 0.2s,
    color 0.2s;
}

.outline:hover {
  border-color: var(--contrast-hover);
  color: var(--contrast-hover);
  text-decoration: underline;
}

.spotify {
  border-color: #1db954;
  color: #1db954;
}

.youtube {
  border-color: #ff0000;
  color: #ff0000;
}

.soundcloud {
  border-color: #ff8800;
  color: #ff8800;
}

.telegram {
  border-color: #0088cc;
  color: #0088cc;
}
</style>
