<script setup lang="ts">
const mapUrl = 'https://www.google.com/maps/d/edit?mid=1LgEcJ9IDXbzOeFkndmmcSyjn7U4&usp=sharing'
</script>

<template>
  <header>
    <h1>Semelles sans frontières</h1>

    <p>Parcours d’un voyage à travers l’Europe : changer nos quotidiens, découvrir de nouveaux horizons et vous partager nos histoires. 🌍 Florian & Quentin</p>

    <NuxtLink :to="mapUrl">Itinéraire</NuxtLink>
  </header>
</template>