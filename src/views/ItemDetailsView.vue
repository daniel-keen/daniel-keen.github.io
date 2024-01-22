<script setup lang="ts">
import '@/assets/content.css'
import AppLink from '@/components/AppLink.vue'
import type { Product } from '@/store/ProductType'
import { useGamesStore } from '@/store/index'
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'
import Modal from './ModalView.vue'
import { ref } from 'vue'

const gamesStore = useGamesStore()
const route = useRoute()
const games = gamesStore.games
const game: Product | undefined = games.find((g) => g.id === route.params.gameId)
const screenshotPath = (index: number) =>
  new URL(`../assets/images/games/${game?.id}/screenshot-${index}.png`, import.meta.url).toString()

const fileContent = ref<string>('')

const parseFile = async (filePath: string): Promise<void> => {
  try {
    const fetchResponse = await fetch(filePath)
    const content = await fetchResponse.text()
    fileContent.value = content
  } catch (ex) {
    console.log('Error in fetch. ' + ex)
  }
}

onMounted(async () => {
  if (game?.privacyPolicy) {
    await parseFile(game.privacyPolicy)
  }
})

const showModal = ref(false)
</script>

<template>
  <article>
    <header>
      <nav aria-label="breadcrumb">
        <ul>
          <li><AppLink to="/games">Games</AppLink></li>
          <li>{{ game?.title }}</li>
        </ul>
      </nav>
    </header>
    <hgroup>
      <h2>{{ game?.title }}</h2>
      <p>{{ game?.shortDescription }}</p>
    </hgroup>

    <img class="thumbnail float-left" :src="game?.thumbnail" />

    <p>{{ game?.longDescription }}</p>

    <blockquote>
      <AppLink to="#privacy-policy" id="show-modal" @click="showModal = true"
        >Privacy Policy</AppLink
      >

      <Teleport to="body">
        <modal :show="showModal" @close="showModal = false">
          <template #header> {{ game?.title }}: Privacy Policy </template>
          <template #body>
            <p style="white-space: pre-wrap">{{ fileContent }}</p>
          </template>
        </modal>
      </Teleport>
    </blockquote>

    <div class="screenshots">
      <img v-for="index in 3" :key="index" :src="screenshotPath(index)" />
    </div>

    <div class="store-buttons">
      <AppLink to="" target="_blank" role="button" class="primary">
        <font-awesome-icon class="store-button" :icon="['fab', 'app-store-ios']" /> App Store
      </AppLink>
      <a href="" target="_blank" role="button" class="primary">
        <font-awesome-icon class="store-button" :icon="['fab', 'google-play']" /> Google Play
      </a>
    </div>
  </article>
</template>
