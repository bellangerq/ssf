<script setup lang="ts">
const props = defineProps<{
  slug: string;
}>();

const { data } = await useAsyncData(`surround-${props.slug}`, () => {
  return queryCollectionItemSurroundings("content", `/${props.slug}`).order(
    "date",
    "ASC"
  );
});
</script>

<template>
  <div class="siblings-links">
    <NuxtLink
      v-if="data?.[0]"
      :to="data[0].path"
      class="siblings-links-item button"
    >
      <span aria-hidden="true">←</span> Article précédent
      <span class="visually-hidden">{{ data[0].title }}</span>
    </NuxtLink>

    <NuxtLink
      v-if="data?.[1]"
      :to="data[1].path"
      class="siblings-links-item button"
    >
      Article suivant
      <span aria-hidden="true">→</span>
      <span class="visually-hidden">{{ data[1].title }}</span>
    </NuxtLink>
  </div>
</template>

<style scoped>
.siblings-links {
  display: flex;
  gap: 1rem;
  justify-content: space-between;
  max-width: var(--slug-width);
  flex-wrap: wrap;
}

.siblings-links-item {
  flex-grow: 1;
  flex-basis: calc((30rem - 100%) * 999);
}
</style>
