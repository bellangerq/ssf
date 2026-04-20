# Semelles sans frontières 🌍

Travel blog: https://ssf.quentin-bellanger.com/

## To do

- Importer les articles manquants :
  - Importer les images des articles dans les bons dossier (Medium-Post-Downloader + `script/markdown-images.js`)
  - Vérifier les liens entre les articles (Recherche : `https://medium.com/semelles`)
  - Vérifier les ImagesBlock des stories de Florian
  - Télécharger les cover des articles et les mettre en jpeg

## Setup

Install dependencies:

```bash
yarn install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
yarn dev
```

## Deployment

Each push on `main` deploys a build with Netlify as a static website.
