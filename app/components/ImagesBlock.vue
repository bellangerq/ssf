<script lang="ts" setup>
defineProps<{
  caption?: string;
}>();

const imagesBlockContainerRef = useTemplateRef("imagesBlockContainerRef");
const childrenCountIsOdd = ref(false);

onMounted(() => {
  if (imagesBlockContainerRef.value) {
    childrenCountIsOdd.value =
      imagesBlockContainerRef.value?.children.length % 2 !== 0;
  }
});
</script>

<template>
  <div
    ref="imagesBlockContainerRef"
    class="images-block-grid"
    :class="{ 'is-odd': childrenCountIsOdd }"
  >
    <slot />
  </div>

  <p v-if="caption" class="images-block-caption">{{ caption }}</p>
</template>

<style scoped>
.images-block-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;

  &:deep(> img) {
    height: 100%;
    object-fit: cover;
  }

  @media (width < 37.5rem) {
    grid-template-columns: 1fr;
    width: 100vw;
    margin-left: calc(50% - 50vw);
  }

  &.is-odd {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    &:deep(> img) {
      max-width: calc(50% - 0.5rem);
      height: initial;

      @media (width < 37.5rem) {
        max-width: none;
        width: 100%;
      }
    }
  }
}

.images-block-caption {
  color: var(--color-grey);
  text-align: center;
  font-size: 1.1rem;
  margin-block-start: 0.5rem;
}
</style>
