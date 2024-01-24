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
const showPrivacyPolicy = ref(document.URL.includes('?privacy-policy'))
const selectedScreenshot = ref<string>('')
const showScreenshot = ref(false)
const shortDescriptionText = ref<string>('')
const longDescriptionText = ref<string>('')
const privacyText = ref<string>('')

const openScreenshotModal = (screenshot: string): void => {
  selectedScreenshot.value = screenshot
  showScreenshot.value = true
}

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
  if ([showPrivacyPolicy.value, showScreenshot.value].some((v) => v)) {
    document.body.classList.add('stop-scrolling')
    document.body.addEventListener('touchmove', preventScroll, { passive: false })
  }
})

const preventScroll = (e: any) => {
  e.preventDefault()
}

watch(
  () => showPrivacyPolicy.value,
  (newValue) => {
    if (newValue) {
      router.replace({ query: { 'privacy-policy': null } })
    } else {
      router.replace({ query: undefined })
    }
  }
)

watch(
  () => [showPrivacyPolicy.value, showScreenshot.value],
  (values) => {
    if (values.some((v) => v)) {
      document.body.classList.add('stop-scrolling')
      // document.body.addEventListener('touchmove', preventScroll, { passive: false })
    } else {
      document.body.classList.remove('stop-scrolling')
      // document.body.removeEventListener('touchmove', preventScroll)
    }
  }
)
</script>

<template>
  <article>
    <header>
      <AppLink :to="router.options.history.state.back"> {{ store.title }}</AppLink>
      / {{ product?.title }}
    </header>
    <hgroup>
      <h2>{{ product?.title }}</h2>
      <p>{{ shortDescriptionText }}</p>
    </hgroup>

    <img class="thumbnail float-left" :src="product?.thumbnail" />

    <p>{{ longDescriptionText }}</p>

    <blockquote>
      <AppLink to="" id="show-modal" @click="showPrivacyPolicy = true">Privacy Policy</AppLink>

      <Teleport to="body">
        <modal :show="showPrivacyPolicy" @close="showPrivacyPolicy = false" :showHeader="true">
          <template #header> {{ product?.title }}: Privacy Policy </template>
          <template #body>
            <p style="white-space: pre-wrap">{{ privacyText }}</p>
          </template>
        </modal>
      </Teleport>
    </blockquote>

    <div class="screenshots">
      <div style="flex"></div>
      <img
        v-for="screenshot in product?.screenshots"
        :key="screenshot"
        :src="screenshot"
        @click="openScreenshotModal(screenshot)"
        class="screenshot"
      />

      <Teleport to="body">
        <modal :show="showScreenshot" @close="showScreenshot = false" :showHeader="false">
          <template #body>
            <img :src="selectedScreenshot" style="max-width: 80dvw; max-height: 80dvh" />
          </template>
        </modal>
      </Teleport>
      <div style="flex"></div>
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
