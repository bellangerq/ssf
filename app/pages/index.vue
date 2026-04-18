<script setup lang="ts">
import HomeHeader from "~/components/HomeHeader.vue";

const { data: posts } = await useAsyncData("content", () => {
  return queryCollection("content")
    .order("date", "ASC")
    .select("author", "cover", "date", "id", "title", "stem")
    .all();
});

useSeoMeta({
  titleTemplate: null
});
</script>

<template>
  <div>
    <HomeHeader />

    <main>
      <ul>
        <HomePost
          v-for="post in posts"
          :key="post.id"
          :author="post.author"
          :cover-url="post.cover"
          :title="post.title"
          :date="post.date"
          :path="post.stem"
          style="margin-bottom: 1rem"
        />
      </ul>
    </main>
  </div>
</template>
