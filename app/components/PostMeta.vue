<script setup lang="ts">
import type { PostAuthor } from "~/utils";
import { formatDate } from "~/utils";

defineProps<{
  author: PostAuthor;
  date: string;
}>();
</script>

<template>
  <p class="post-meta">
    <svg
      class="post-meta-icon"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path
        d="M6.93912 14.0328C6.7072 14.6563 6.51032 15.2331 6.33421 15.8155C7.29345 15.1189 8.43544 14.6767 9.75193 14.5121C12.2652 14.198 14.4976 12.5385 15.6279 10.4537L14.1721 8.99888L15.5848 7.58417C15.9185 7.25004 16.2521 6.91614 16.5858 6.58248C17.0151 6.15312 17.5 5.35849 18.0129 4.2149C12.4197 5.08182 8.99484 8.50647 6.93912 14.0328ZM17 8.99739L18 9.99669C17 12.9967 14 15.9967 10 16.4967C7.33146 16.8303 5.66421 18.6636 4.99824 21.9967H3C4 15.9967 6 1.99669 21 1.99669C20.0009 4.99402 19.0018 6.99313 18.0027 7.99402C17.6662 8.33049 17.3331 8.66382 17 8.99739Z"
      ></path>
    </svg>
    Par <strong>{{ author }}</strong>

    <br />

    <svg
      class="post-meta-icon"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path
        d="M9 1V3H15V1H17V3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H7V1H9ZM20 11H4V19H20V11ZM7 5H4V9H20V5H17V7H15V5H9V7H7V5Z"
      ></path>
    </svg>
    Le
    <strong>
      <time>{{ formatDate(date) }}</time>
    </strong>
  </p>
</template>

<style scoped>
.post-meta {
  font-size: 1.25rem;

  @media (width < 37.5rem) {
    font-size: 1.1rem;
  }
}

.post-meta-icon {
  color: var(--color-primary);
  vertical-align: center;
  aspect-ratio: 1/1;
  width: 1em;
}
</style>
