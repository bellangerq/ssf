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
  <div>
    <NuxtLink v-if="data?.[0]" :to="data[0].path">
      ← {{ data[0].title }}
    </NuxtLink>
    <NuxtLink v-if="data?.[1]" :to="data[1].path">
      {{ data[1].title }} →
    </NuxtLink>
  </div>
</template>
