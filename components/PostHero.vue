<script lang="ts" setup>
import Meta from "./Meta.vue";

defineProps<{
  cover: string;
  title: string;
  description: string;
  author: "quentin" | "florian";
  date: string;
}>();
</script>

<template>
  <header class="post-hero-wrapper" :style="`--post-cover: url('${cover}')`">
    <div class="post-hero-content">
      <NuxtLink class="post-hero-back-link" to="/">
        &larr; Retour à l’accueil
      </NuxtLink>
      <h1 class="post-hero-title">{{ title }}</h1>
      <p class="post-hero-description">{{ description }}</p>
      <Meta :author="author" :date="date" />
    </div>
  </header>
</template>

<style scoped>
.post-hero-wrapper {
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    var(--post-cover);
  background-size: cover;
  background-position: 50%;
  display: flex;
  justify-content: center;
  padding: 10rem 2rem 6rem;
  margin-bottom: 1rem;
}

.post-hero-content {
  max-width: 50rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  color: var(--white);
}

.post-hero-back-link {
  color: var(--white);
  width: max-content;
}

.post-hero-logo {
  border-radius: 50%;
  width: 10rem;
}

.post-hero-title {
  font-size: 3rem;
}

.post-hero-description {
  font-size: 1.5rem;
}

@media (max-width: 37.5rem) {
  .post-hero-wrapper {
    padding: 4rem 1rem;
  }

  .post-hero-logo {
    width: 4rem;
  }

  .post-hero-title {
    font-size: 2rem;
  }

  .post-hero-description {
    font-size: 1.2rem;
  }
}
</style>
