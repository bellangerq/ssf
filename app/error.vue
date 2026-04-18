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
  <main>
    <h1>{{ error.statusText }} ({{ error.status }})</h1>

    <p>{{ error.message }}</p>

    <NuxtLink :to="{ name: 'index' }">Page d’accueil</NuxtLink>
  </main>
</template>
