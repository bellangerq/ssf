<template>
  <p class="site-footer">
    Une question, une erreur ?
    <a href="mailto:hello@quentin-bellanger.com?subject=SSF"
      >Envoyez un e-mail par ici</a
    >. Le code source est disponible sur
    <NuxtLink to="https://github.com/bellangerq/ssf" target="_blank"
      >GitHub</NuxtLink
    >.
  </p>
</template>

<style scoped>
.site-footer {
  color: var(--color-grey);
  text-align: center;
  padding: 1rem;
  max-width: var(--site-width);
  margin-inline: auto;

  a {
    border-radius: 1rem;
    &:hover {
      text-decoration: none;
    }

    &:focus-visible {
      --color-outline: var(--color-grey);
    }
  }
}
</style>
