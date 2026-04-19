<script setup lang="ts">
const mapUrl =
  "https://www.google.com/maps/d/edit?mid=1LgEcJ9IDXbzOeFkndmmcSyjn7U4&usp=sharing";
</script>

<template>
  <header class="post-header">
    <NuxtLink class="post-header-link" :to="{ name: 'index' }">
      <img class="post-header-logo" src="~/assets/images/logo.png" alt="" />
      <p class="post-header-title">Semelles sans frontières</p>
    </NuxtLink>

    <NuxtLink :to="mapUrl" target="_blank" class="post-header-map-link">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <title>Itinéraire</title>
        <path
          d="M2 5L9 2L15 5L21.303 2.2987C21.5569 2.18992 21.8508 2.30749 21.9596 2.56131C21.9862 2.62355 22 2.69056 22 2.75827V19L15 22L9 19L2.69696 21.7013C2.44314 21.8101 2.14921 21.6925 2.04043 21.4387C2.01375 21.3765 2 21.3094 2 21.2417V5ZM16 19.3955L20 17.6812V5.03308L16 6.74736V19.3955ZM14 19.2639V6.73607L10 4.73607V17.2639L14 19.2639ZM8 17.2526V4.60451L4 6.31879V18.9669L8 17.2526Z"
        />
      </svg>
    </NuxtLink>
  </header>
</template>

<style scoped>
.post-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 1rem;
  max-width: var(--site-width);
  margin-inline: auto;
  margin-block-end: 4rem;

  @media (width < 37.5rem) {
    margin-block-end: 2rem;
    padding: 0.5rem;
  }
}

.post-header-link {
  display: flex;
  gap: 0.25rem;
  align-items: center;
  text-decoration: none;

  &:hover {
    .post-header-title {
      color: var(--color-primary);
    }
  }
}

.post-header-logo {
  aspect-ratio: 1/1;
  width: 2rem;
}

.post-header-title {
  color: var(--color-black);
  font-size: 1.25rem;
}

.post-header-map-link {
  line-height: 1;
  color: var(--color-black);
  height: 2rem;
  width: 2rem;

  &:hover {
    color: var(--color-primary);
  }
}
</style>
