<script setup lang="ts">
const props = defineProps({
  show: Boolean,
  showHeader: Boolean
})
</script>

<template>
  <Transition name="modal">
    <dialog v-if="show" class="modal-mask">
      <article>
        <button aria-label="Close" class="close" @click="$emit('close')"></button>
        <header v-if="showHeader">
          <slot name="header">default header</slot>
        </header>
        <div class="content">
          <div>
            <slot name="body">default body</slot>
          </div>
        </div>
      </article>
    </dialog>
  </Transition>
</template>

<style scoped>
article {
  overflow-x: hidden;
}
dialog {
  padding-top: 5dvh;
}
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: transparent;
  display: flex;
  transition: opacity 0.3s ease;
}

article {
  display: flex;
  flex-direction: column;
}

.close {
  display: flex;
  position: absolute;
  align-self: flex-end;
  background-color: transparent;
  border: none;
}

.modal-enter-from {
  opacity: 0;
}

.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
