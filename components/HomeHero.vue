<script lang="ts" setup></script>

<template>
  <header class="home-hero-wrapper">
    <div class="home-hero-content">
      <img class="home-hero-logo" src="/images/logo.png" alt="" />
      <h1 class="home-hero-title">Semelles sans frontières</h1>
      <p class="home-hero-description">
        Parcours d’un voyage à travers l’Europe : changer nos quotidiens,
        découvrir de nouveaux horizons et vous partager nos histoires. 🌍
        Florian & Quentin
      </p>
    </div>
  </header>
</template>

<style scoped>
.home-hero-wrapper {
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("/images/cover.jpg");
  background-size: cover;
  background-position: 50%;
  display: flex;
  justify-content: center;
  padding: 10rem 2rem 6rem;
  margin-bottom: 1rem;
}

.home-hero-content {
  max-width: 75rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  color: var(--white);
}

.home-hero-logo {
  border-radius: 50%;
  width: 10rem;
}

.home-hero-title {
  font-size: 3rem;
}

.home-hero-description {
  font-size: 1.5rem;
}

@media (max-width: 37.5rem) {
  .home-hero-wrapper {
    padding: 4rem 2rem;
  }

  .home-hero-logo {
    width: 4rem;
  }

  .home-hero-title {
    font-size: 2rem;
  }

  .home-hero-description {
    font-size: 1.2rem;
  }
}
</style>
