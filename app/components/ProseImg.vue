<script setup lang="ts">
// Default <ProseImg /> from Nuxt: https://github.com/nuxt-content/mdc/blob/main/src/runtime/components/prose/ProseImg.vue

defineProps<{
  src: string;
  alt: string;
}>();
</script>

<template>
  <img :src="src" :alt="alt" loading="lazy" />
</template>
