<script lang="ts" setup>
defineProps<{
  caption?: string;
}>();
</script>

<template>
  <div class="gallery">
    <div class="gallery-grid">
      <slot />
    </div>
    <p class="gallery-caption" v-if="caption">{{ caption }}</p>
  </div>
</template>

<style scoped>
.gallery {
  width: 100vw;
  margin-left: calc(50% - 50vw);
  margin-block: 4rem;
}

.gallery-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
}

.gallery-grid:deep(> img) {
  height: 25rem;
}

.gallery-caption {
  margin-top: 1rem;
  text-align: center;
  font-style: italic;
}

@media (max-width: 50rem) {
  .gallery-grid:deep(> img) {
    flex-basis: 100%;
  }
}
</style>
