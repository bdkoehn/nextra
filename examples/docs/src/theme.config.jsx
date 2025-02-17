import { useConfig } from 'nextra-theme-docs'

/* eslint sort-keys: error */
/**
 * @type {import('nextra-theme-docs').DocsThemeConfig}
 */
export default {
  logo: <span>MIDCHAPTER</span>,
  footer: {
    text: `${new Date().getFullYear()} © Midchapter.`
  },
  feedback: {
    content: null
  },
  search:{
    placeholder: 'Find...',
  },
  toc: {
    float: true,
    title: "CONTENTS"
  },
  sidebar: {
    toggleButton: true,
    defaultMenuCollapseLevel: 1
  },
  banner: {
    key: 'Midchapter',
    text: 'MIDCHAPTER'
  },
  chat: {
    link: 'https://discord.gg/hEM84NMkRv' // Next.js discord server,
  },
  docsRepositoryBase:
    'https://github.com/shuding/nextra/blob/core/examples/docs',
  editLink: {
    text: null
  },
  faviconGlyph: '✦',
  useNextSeoProps() {
    const { frontMatter } = useConfig()
    return {
      additionalLinkTags: [
        {
          href: '/apple-icon-180x180.png',
          rel: 'apple-touch-icon',
          sizes: '180x180'
        },
        {
          href: '/android-icon-192x192.png',
          rel: 'icon',
          sizes: '192x192',
          type: 'image/png'
        },
        {
          href: '/favicon-96x96.png',
          rel: 'icon',
          sizes: '96x96',
          type: 'image/png'
        },
        {
          href: '/favicon-32x32.png',
          rel: 'icon',
          sizes: '32x32',
          type: 'image/png'
        },
        {
          href: '/favicon-16x16.png',
          rel: 'icon',
          sizes: '16x16',
          type: 'image/png'
        }
      ],
      additionalMetaTags: [
        { content: 'en', httpEquiv: 'Content-Language' },
        { content: 'Midchapter', name: 'apple-mobile-web-app-title' },
        { content: '#fff', name: 'msapplication-TileColor' },
        { content: '/ms-icon-144x144.png', name: 'msapplication-TileImage' }
      ],
      description:
        frontMatter.description || 'Midchapter: continue the story',
      openGraph: {
        images: [
          { url: frontMatter.image || 'https://nextra.vercel.app/og.png' }
        ]
      },
      titleTemplate: '%s – Midchapter',
      twitter: {
        cardType: 'summary_large_image',
        site: 'https://nextra.vercel.app'
      }
    }
  }
}
