import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Vue modern notification",
  description: "A modern notification plugin/package for Vue 3 applications",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/views/examples.md' }
    ],

    sidebar: [
      {
        text: 'Get started',
        items: [
          { text: 'Install', link: '/views/install.md' },
          { text: 'Props', link: '/views/props.md' },
          { text: 'Examples', link: '/views/examples.md' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/RejownAhmed/vue-modern-notification' }
    ]
  }
})
