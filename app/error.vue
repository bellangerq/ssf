<script setup lang="ts">
import type { NuxtError } from "#app";

defineProps<{
  error: NuxtError;
}>();

useSeoMeta({
  title: "Page d’erreur",
  ogTitle: "Page d’erreur"
});
</script>

<template>
  <PostHeader />
  <main class="error-wrapper">
    <h1 class="error-title">{{ error.statusText }} ({{ error.status }})</h1>

    <p class="error-description">{{ error.message }}</p>

    <button class="button" @click="clearError({ redirect: '/' })">
      Retourner à la page d’accueil
    </button>
  </main>
</template>

<style scoped>
.error-wrapper {
  max-width: var(--site-width);
  margin-inline: auto;
  padding: 10rem 1rem;
}

.error-title {
  font-size: 2.5rem;
  margin-block-end: 2rem;
}

.error-description {
  margin-block-end: 1rem;
}
</style>
