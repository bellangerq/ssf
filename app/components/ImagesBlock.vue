<script lang="ts" setup>
defineProps<{
  caption?: string;
}>();
</script>

<template>
  <div>
    <div>
      <slot />
    </div>
    <p v-if="caption">{{ caption }}</p>
  </div>
</template>
