<script lang="ts" setup>
import PostHero from "/components/PostHero.vue";

const { prev, next } = useContent();
</script>

<template>
  <ContentDoc v-slot="{ doc }">
    <PostHero
      :title="doc.title"
      :description="doc.description"
      :cover="doc.cover"
      :author="doc.author"
      :date="doc.date"
    />
    <ContentRenderer tag="main" class="post-body" :value="doc" />
  </ContentDoc>

  <ul class="navigation">
    <li class="navigation-item">
      <NuxtLink v-if="prev" :to="prev._path" class="navigation-link">
        &larr; <strong>{{ prev.title }}</strong>
      </NuxtLink>
    </li>
    <li class="navigation-item">
      <NuxtLink v-if="next" :to="next._path" class="navigation-link">
        <strong>{{ next.title }}</strong> &rarr;
      </NuxtLink>
    </li>
  </ul>
</template>

<style scoped>
.navigation {
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr 1fr;
  padding: 0;
}

.navigation-item {
  display: flex;
  align-items: stretch;
  justify-content: stretch;
  list-style-type: none;
}

.navigation-link {
  color: var(--white);
  background: var(--blue);
  padding: 2rem;
  flex-basis: 100%;
  font-size: 1.4rem;
}

.navigation-link:hover {
  text-decoration: none;
}

.navigation-link:focus {
  outline-offset: 2px;
}

.navigation-item:last-of-type .navigation-link {
  text-align: right;
}

.post-body {
  max-width: 44rem;
  margin: 4rem auto;
  padding: 0 1rem;
}

.post-body:deep(> * + *) {
  margin-top: 1rem;
}

.post-body:deep(h2) {
  margin-top: 2.5rem;
}
.post-body:deep(p) {
  font-size: 1.25rem;
}

.post-body:deep(a) {
  color: var(--blue);
}

.post-body:deep(a:hover) {
  text-decoration: none;
}

.post-body:deep(ul) {
  padding-left: 1.5rem;
}

.post-body:deep(li) {
  font-size: 1.25rem;
}

.post-body:deep(blockquote) {
  border-left: 6px solid var(--blue);
  padding-left: 1rem;
  font-style: italic;
}

.post-body:deep(iframe) {
  width: 100%;
}

.post-body:deep(> img) {
  min-width: 100%;
}

.post-body:deep(> hr) {
  border: none;
  border-bottom: 4px solid var(--blue);
  margin: 4rem auto;
  min-width: 6.25rem;
  width: 20%;
}

@media (max-width: 50rem) {
  .post-body:deep(> img) {
    width: 100vw;
    max-width: none;
    margin-left: calc(50% - 50vw);
  }
}
</style>
