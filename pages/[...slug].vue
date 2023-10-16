<script lang="ts" setup>
import PostHero from "/components/PostHero.vue";
</script>

<template>
  <ContentDoc v-slot="{ doc }">
    <PostHero
      :title="doc.title"
      :subtitle="doc.subtitle"
      :cover="doc.cover"
      :author="doc.author"
      :date="doc.date"
    />
    <main>
      <ContentRenderer :value="doc" />
    </main>
  </ContentDoc>
</template>
