<script setup lang="ts">
import type { PostAuthor } from "~/utils";
import PostMeta from "./PostMeta.vue";

defineProps<{
  title: string;
  date: string;
  author: PostAuthor;
  path: string;
}>();
</script>

<template>
  <li class="home-post">
    <img class="home-post-image" :src="`/${path}/cover.jpeg`" alt="" />
    <div class="home-post-content">
      <h2 class="home-post-title">
        <NuxtLink
          class="home-post-link"
          :to="`/${path}`"
          :aria-describedby="`meta-${path}`"
          >{{ title }}</NuxtLink
        >
      </h2>
      <PostMeta
        :id="`meta-${path}`"
        class="home-post-meta"
        :author="author"
        :date="date"
      />
    </div>
  </li>
</template>

<style scoped>
.home-post {
  border: 1px solid var(--color-grey-light);
  border-radius: calc(1rem + 1px);
  display: flex;
  flex-direction: column;
  min-width: 0;

  &:focus-within {
    outline: 2px solid var(--color-primary);
    outline-offset: 2px;
  }
}

.home-post-image {
  border-radius: 1rem 1rem 0 0;
  aspect-ratio: 16/9;
  object-fit: cover;
  height: auto;
}

.home-post-content {
  flex-grow: 1;
  border-block-start: 1px solid var(--color-grey-light);
  padding: 1rem;
  display: flex;
  flex-direction: column;
}

.home-post-title {
  font-size: 1.75rem;
  margin-block-end: 0.5rem;

  @media (width < 37.5rem) {
    font-size: 1.5rem;
  }
}

.home-post-link {
  outline: none;

  &:hover {
    color: var(--color-primary);
  }
}

.home-post-meta {
  margin-block-start: auto;
}
</style>
