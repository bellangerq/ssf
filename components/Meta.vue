<script lang="ts" setup>
defineProps<{
  author: "quentin" | "florian";
  date: string;
  theme: "light" | "dark";
}>();

function formatAuthor(author: string): string {
  return author === "quentin" ? "Quentin Bellanger" : "Florian Spatule";
}

function formatDate(date: string): string {
  return new Intl.DateTimeFormat("fr-FR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(date));
}
</script>

<template>
  <div :class="['meta', { dark: theme === 'dark' }]">
    <img class="picture" :src="`/images/authors/${author}.jpg`" alt="" />
    <p class="author">
      <span class="visually-hidden">Auteur : </span>{{ formatAuthor(author) }}
    </p>
    <time :datetime="date">
      <span class="visually-hidden">Date de publication : </span>
      {{ formatDate(date) }}
    </time>
  </div>
</template>

<style scoped>
.meta {
  display: grid;
  grid-template-columns: 2.5rem 1fr;
  grid-template-rows: 1fr 1fr;
  align-items: center;
  gap: 0 0.5rem;
}

.meta.dark {
  color: var(--white);
}

.picture {
  border-radius: 50%;
  grid-column: 1;
  grid-row: 1 / -1;
}

.author {
  font-weight: bold;
}
</style>
