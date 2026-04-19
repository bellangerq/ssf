<script setup lang="ts">
import PostMeta from "~/components/PostMeta.vue";

const route = useRoute();
const slug = route.params.slug as string;

const { data: post } = await useAsyncData(`post-${slug}`, () => {
  return queryCollection("content").path(`/${slug}`).first();
});

if (!post.value) {
  throw createError({
    status: 404,
    statusText: "Page non trouvée",
    message: "La page que vous cherchez est introuvable."
  });
}

useSeoMeta({
  title: post.value?.title,
  description: post.value?.description,
  ogTitle: post.value?.title,
  ogDescription: post.value?.description
});
</script>

<template>
  <div>
    <PostHeader />

    <main v-if="post" class="slug-wrapper">
      <h1 class="slug-title">{{ post.title }}</h1>
      <PostMeta class="slug-meta" :author="post.author" :date="post.date" />

      <img class="slug-cover" :src="post.cover" alt="" />
      <ContentRenderer class="slug-body" :value="post" />

      <SiblingsLinks :slug="slug" />
    </main>
  </div>
</template>

<style scoped>
.slug-wrapper {
  max-width: var(--site-width);
  margin-inline: auto;
  padding: 1rem;
}

.slug-title {
  font-size: 2.5rem;
  margin-block-end: 1rem;

  @media (width < 37.5rem) {
    font-size: 2rem;
  }
}

.slug-meta {
  margin-block-end: 1rem;
}

.slug-cover {
  aspect-ratio: 16/9;
  width: 100%;
  object-fit: cover;
  margin-block-end: 1rem;
}

.slug-body {
  max-width: var(--slug-width);

  &:deep(> * + *) {
    margin-top: 1rem;
  }

  &:deep(h2) {
    margin-top: 2.5rem;
  }

  &:deep(> p) {
    font-size: 1.25rem;
  }

  &:deep(a:hover) {
    color: var(--color-primary);
  }

  &:deep(ul) {
    padding-left: 1.5rem;
    list-style-type: initial;
  }

  &:deep(li) {
    font-size: 1.25rem;
  }

  &:deep(blockquote) {
    border-left: 2px solid var(--color-primary);
    margin: 0;
    margin: 1rem 0 0 1rem;
    padding-left: 1rem;
    font-size: 1.15rem;
    font-style: italic;
  }

  &:deep(iframe) {
    width: 100%;
  }

  &:deep(> img) {
    @media (width < 37.5rem) {
      max-width: 100vw;
      margin-inline-start: -1rem;
    }
  }

  &:deep(> hr) {
    border: none;
    border-bottom: 4px solid var(--color-primary);
    margin: 4rem auto;
    min-width: 6.25rem;
    width: 20%;
  }
}
</style>
