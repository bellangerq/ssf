<script lang="ts" setup></script>

<template>
  <header class="banner-wrapper">
    <div class="banner-content">
      <img class="banner-logo" src="/images/logo.png" alt="" />
      <h1 class="banner-title">Semelles sans frontières</h1>
      <p class="banner-description">
        Parcours d’un voyage à travers l’Europe : changer nos quotidiens,
        découvrir de nouveaux horizons et vous partager nos histoires. 🌍
        Florian & Quentin
      </p>
    </div>
  </header>
</template>

<style scoped>
.banner-wrapper {
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("/images/cover.jpg");
  background-size: cover;
  background-position: 50%;
  display: flex;
  justify-content: center;
  padding: 10rem 2rem 6rem;
  margin-bottom: 1rem;
}

.banner-content {
  max-width: 75rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  color: var(--white);
}

.banner-logo {
  border-radius: 50%;
  width: 10rem;
}

.banner-title {
  font-size: 3rem;
}

.banner-description {
  font-size: 1.5rem;
}

@media (max-width: 37.5rem) {
  .banner-wrapper {
    padding: 4rem 2rem;
  }

  .banner-logo {
    width: 4rem;
  }
}
</style>
