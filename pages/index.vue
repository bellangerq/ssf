<script lang="ts" setup>
import HomeHero from "~/components/HomeHero.vue";
import Card from "~/components/Card.vue";
</script>

<template>
  <HomeHero />
  <main>
    <ul class="article-list">
      <ContentList
        v-slot="{ list }"
        :query="{
          sort: [{ date: 1 }],
        }"
      >
        <Card
          v-for="article in list"
          :key="article._path"
          :title="article.title!"
          :slug="article._path!"
          :author="article.author"
          :date="article.date"
          :cover="article.cover"
        />
      </ContentList>
    </ul>
  </main>
</template>

<style scoped>
.article-list {
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 0;
  gap: 1rem;
}

@media (max-width: 50rem) {
  .article-list {
    grid-template-columns: 1fr;
  }
}
</style>
