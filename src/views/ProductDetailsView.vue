<script setup lang="ts">
import '@/assets/content.css'
import AppLink from '@/components/AppLink.vue'
import type { Product } from '@/store/ProductType'
import { onMounted, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import Modal from './ModalView.vue'
import { ref } from 'vue'
import { getStoreByRouteParam } from '@/utils/GetStoreByRouteParam'

const route = useRoute()
const router = useRouter()
const store = getStoreByRouteParam(route.params.productId.toString())
const products = store.products
const product: Product | undefined = products.find(({ id }) => id === route.params.productId)
const showModal = ref(document.URL.includes('?privacy-policy'))
const shortDescriptionText = ref<string>('')
const longDescriptionText = ref<string>('')
const privacyText = ref<string>('')

const parseFile = async (filePath: string): Promise<string> => {
  try {
    const fetchResponse = await fetch(filePath)
    return await fetchResponse.text()
  } catch (ex) {
    console.log('Error in fetch. ' + ex)
  }
  return filePath
}

onMounted(async () => {
  if (product) {
    shortDescriptionText.value = await parseFile(product.shortDescription)
    longDescriptionText.value = await parseFile(product.longDescription)
    privacyText.value = await parseFile(product.privacyPolicy)
  }
})

watch(
  () => showModal.value,
  (newValue) => {
    if (newValue) {
      router.replace({ query: { 'privacy-policy': null } })
      document.body.classList.add('stop-scrolling')
    } else {
      router.replace({ query: undefined })
      document.body.classList.remove('stop-scrolling')
    }
  }
)
</script>

<template>
  <article>
    <header>
      <nav aria-label="breadcrumb">
        <ul>
          <li>
            <AppLink :to="router.options.history.state.back"> {{ store.title }}</AppLink>
          </li>
          <li>{{ product?.title }}</li>
        </ul>
      </nav>
    </header>
    <hgroup>
      <h2>{{ product?.title }}</h2>
      <p>{{ shortDescriptionText }}</p>
    </hgroup>

    <img class="thumbnail float-left" :src="product?.thumbnail" />

    <p>{{ longDescriptionText }}</p>

    <blockquote>
      <AppLink to="" id="show-modal" @click="showModal = true">Privacy Policy</AppLink>

      <Teleport to="body">
        <modal :show="showModal" @close="showModal = false">
          <template #header> {{ product?.title }}: Privacy Policy </template>
          <template #body>
            <p style="white-space: pre-wrap">{{ privacyText }}</p>
          </template>
        </modal>
      </Teleport>
    </blockquote>

    <div class="screenshots">
      <img v-for="screenshot in product?.screenshots" :key="screenshot" :src="screenshot" />
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

<style>
.stop-scrolling {
  height: 100%;
  overflow: hidden;
}
</style>
