<script lang="ts" setup>
import Meta from "./Meta.vue";

defineProps<{
  title: String;
  cover: String;
  slug: String;
  author: String;
  date: String;
}>();
</script>

<template>
  <li class="card" :style="`--cover: url('${cover}')`">
    <h2 class="card-title">
      <NuxtLink class="card-link" :to="slug">{{ title }}</NuxtLink>
    </h2>
    <Meta theme="dark" :author="author" :date="date" />
  </li>
</template>

<style scoped>
.card {
  list-style-type: none;
  display: grid;
  grid-template-rows: 1fr auto;
  gap: 1rem;
  padding: 10rem 2rem 2rem;
  background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    var(--cover);
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
}

.card:hover {
  text-decoration: underline;
}

.card-title {
  max-width: 75%;
  align-self: end;
  font-size: 2rem;
}

.card-link {
  color: var(--white);
  text-decoration: none;
}

.card-link:hover {
  text-decoration: underline;
}

.card-link::after {
  content: "";
  position: absolute;
  inset: 0;
}

@media (max-width: 62.5rem) {
  .card-title {
    font-size: 1.5rem;
    max-width: none;
  }
}
</style>
