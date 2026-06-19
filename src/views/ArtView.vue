<script setup lang="ts"></script>

<template>
  <div class="page">
    <section class="card">
      <span class="eyebrow">Sketchbook</span>
      <h1>Art</h1>
      <p>
        Drawing is where I unwind. It's a hobby, but it feeds the same eye for detail that goes into
        everything else I build.
      </p>
      <p>
        I post the pieces I'm happy with over on Instagram, and my 3D work lives on Sketchfab—come
        take a look.
      </p>
      <div class="art-links">
        <a
          class="btn"
          target="_blank"
          rel="noopener"
          href="https://www.instagram.com/quacking_of_the_ducks"
        >
          <font-awesome-icon :icon="['fab', 'instagram']" /> Visit instagram
        </a>
        <a class="btn" target="_blank" rel="noopener" href="https://sketchfab.com/yellow-duck-games">
          <font-awesome-icon :icon="['fab', 'sketchfab']" /> View on Sketchfab
        </a>
      </div>
    </section>
  </div>
</template>

<style scoped>
.art-links {
  margin-top: 24px;
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}
</style>
