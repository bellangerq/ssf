<script setup lang="ts">
import { formatDate } from "~/utils";

defineProps<{
  title: string;
  coverUrl: string;
  date: string;
  author: string;
  path: string;
}>();
</script>

<template>
  <li style="border: 1px solid">
    <img :src="coverUrl" alt="" />
    <NuxtLink :to="`/${path}`">{{ title }}</NuxtLink>
    <p>
      Par {{ author }} | Le <time>{{ formatDate(date) }}</time>
    </p>
  </li>
</template>
