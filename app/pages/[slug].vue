<script setup lang="ts">
import { formatDate } from "~/utils";

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

    <main v-if="post">
      <h1>Article {{ slug }}</h1>
      <p>
        Par {{ post.author }} | Le <time>{{ formatDate(post.date) }}</time>
      </p>
      <ContentRenderer class="post-body" :value="post" />

      <SiblingsLinks :slug="slug" />
    </main>
  </div>
</template>
