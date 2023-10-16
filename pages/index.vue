<template>
  <h1>Semelles sans frontières</h1>

  <main>
    <ul>
      <ContentList v-slot="{ list }">
        <li v-for="article in list" :key="article._path">
          <NuxtLink :to="article._path">
            <h2>{{ article.title }}</h2>
          </NuxtLink>
          <p>{{ article.subtitle }}</p>
          <time :datetime="article.date">{{ article.date }}</time>
          <p>Auteur : {{ article.author }}</p>
        </li>
      </ContentList>
    </ul>
  </main>
</template>
