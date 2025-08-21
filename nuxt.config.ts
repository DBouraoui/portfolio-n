import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/eslint', '@nuxt/image', '@nuxt/ui', '@nuxtjs/i18n'],
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [tailwindcss()],
  },
  app: {
    head: {
      title: 'Dylan Bouraoui - Développeur Web',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content:
            'Portfolio de Dylan Bouraoui, développeur web. Découvrez mes projets et compétences.',
        },
        {
          name: 'keywords',
          content: 'développeur web, portfolio, projets, compétences, développement web',
        },
        { name: 'author', content: 'Dylan Bouraoui' },
        { property: 'og:title', content: 'Mon Portfolio - Développeur Web' },
        {
          property: 'og:description',
          content:
            'Portfolio de Dylan Bouraoui, développeur web. Découvrez mes projets et compétences.',
        },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://dbouraoui.fr' },
        { property: 'og:image', content: 'https://dbouraoui.fr/head.png' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/head.png' },
        { rel: 'canonical', href: 'https://dbouraoui.fr' },
      ],
    },
  },
  i18n: {
    defaultLocale: 'fr',
    locales: [
      {
        code: 'en',
        name: 'English',
        file: 'en.json',
      },
      {
        code: 'fr',
        name: 'Français',
        file: 'fr.json',
      },
    ],
  },
})
