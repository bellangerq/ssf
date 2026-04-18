<script setup lang="ts">
const mapUrl = 'https://www.google.com/maps/d/edit?mid=1LgEcJ9IDXbzOeFkndmmcSyjn7U4&usp=sharing'
</script>

<template>
  <header>
    <NuxtLink :to="{name: 'index'}">
      <img src="~/assets/images/logo.png" alt="">
      <p>Semelles sans frontières</p>
    </NuxtLink>

    <NuxtLink :to="mapUrl">Itinéraire</NuxtLink>
  </header>
</template>