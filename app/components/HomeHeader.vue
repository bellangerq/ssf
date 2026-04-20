<script setup lang="ts">
const mapUrl =
  "https://www.google.com/maps/d/edit?mid=1LgEcJ9IDXbzOeFkndmmcSyjn7U4&usp=sharing";
</script>

<template>
  <header class="home-header">
    <div class="home-header-site-name">
      <img class="home-header-logo" src="~/assets/images/logo.png" alt="" />
      <h1 class="home-header-title">Semelles sans frontières</h1>
    </div>

    <p class="home-header-description">
      Parcours d’un voyage à travers l’Europe : changer nos quotidiens,
      découvrir de nouveaux horizons et vous partager nos histoires – Florian &
      Quentin 🌍
    </p>

    <div class="home-header-actions">
      <NuxtLink
        class="button"
        :to="{
          name: 'slug',
          params: { slug: 'suivez-le-recit-dun-road-trip-en-europe' }
        }"
        >Lire la genèse du projet</NuxtLink
      >
      <NuxtLink class="button button-secondary" target="_blank" :to="mapUrl">
        Découvrir l’itinéraire
      </NuxtLink>
    </div>
  </header>
</template>

<style scoped>
.home-header {
  max-width: 37.5rem;
  margin-inline: auto;
  padding: 4rem 1rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  @media (width < 37.5rem) {
    padding-block: 2rem;
  }

  .home-header-site-name {
    display: flex;
    gap: 1rem;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
  }

  .home-header-title {
    font-size: 2.5rem;
  }

  .home-header-logo {
    aspect-ratio: 1/1;
    width: 4rem;
  }

  .home-header-description {
    font-size: 1.25rem;
  }

  .home-header-actions {
    display: flex;
    gap: 1rem;
    justify-content: center;
    flex-wrap: wrap;
  }
}
</style>
