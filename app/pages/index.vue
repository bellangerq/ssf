<script setup lang="ts">
import HomeHeader from "~/components/HomeHeader.vue";

const { data: posts } = await useAsyncData("content", () => {
  return queryCollection("content")
    .order("date", "ASC")
    .select("author", "date", "id", "title", "stem")
    .all();
});

useSeoMeta({
  titleTemplate: null
});
</script>

<template>
  <div>
    <HomeHeader />

    <main class="index-wrapper">
      <ul class="index-list">
        <HomePost
          v-for="post in posts"
          :key="post.id"
          :author="post.author"
          :title="post.title"
          :date="post.date"
          :path="post.stem"
        />
      </ul>
    </main>
  </div>
</template>

<style scoped>
.index-wrapper {
  border-block-start: 4px solid var(--color-primary);
}

.index-list {
  max-width: var(--site-width);
  margin-inline: auto;
  padding: 4rem 1rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;

  @media (width < 37.5rem) {
    grid-template-columns: 1fr;
    padding: 2rem 1rem;
  }
}
</style>
