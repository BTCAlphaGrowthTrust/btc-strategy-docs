import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// BTC Alpha — Strategy Data API docs. Brand defined fresh here (carries to the site overhaul).

const config: Config = {
  title: 'BTC Alpha',
  tagline: 'Backtested strategy performance data, built for institutions.',
  favicon: 'img/favicon.svg',

  future: {v4: true},

  url: 'https://docs.btcalpha.com.au',
  baseUrl: '/',
  organizationName: 'BTCAlphaGrowthTrust',
  projectName: 'btc-strategy-docs',

  // Phase 1 (look-lock): some nav/card targets are not authored yet — warn, don't throw.
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  i18n: {defaultLocale: 'en', locales: ['en']},

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: 'docs',
          docItemComponent: '@theme/ApiItem', // render API pages with the OpenAPI theme
        },
        blog: false, // data API docs — no blog
        theme: {customCss: './src/css/custom.css'},
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    [
      'docusaurus-plugin-openapi-docs',
      {
        id: 'openapi',
        docsPluginId: 'classic',
        config: {
          strategyApi: {
            specPath: 'api-reference/openapi.json', // checked-in sample (CI will refresh later)
            outputDir: 'docs/api-reference', // generated (gitignored)
            downloadUrl: 'https://btc-strategy-data-api.fly.dev/openapi.json',
            sidebarOptions: {groupPathsBy: 'tag', categoryLinkSource: 'tag'},
            hideSendButton: false, // keep the interactive "Send" (hits production server)
          },
        },
      },
    ],
  ],
  themes: ['docusaurus-theme-openapi-docs'],

  themeConfig: {
    image: 'img/og-cover.svg', // placeholder — replace with branded 1200x630 PNG
    colorMode: {
      defaultMode: 'dark',
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'BTC Alpha',
      logo: {alt: 'BTC Alpha', src: 'img/logo.svg'},
      items: [
        {to: '/docs/get-started/start-here', label: 'Get Started', position: 'left'},
        {to: '/docs/api-reference', label: 'API Reference', position: 'left'},
        {to: '/docs/methodology/overview', label: 'Methodology', position: 'left'},
        {href: 'https://btcalpha.com.au', label: 'btcalpha.com.au', position: 'right'},
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Product',
          items: [
            {label: 'Quickstart', to: '/docs/get-started/quickstart'},
            {label: 'API Reference', to: '/docs/api-reference'},
            {label: 'Methodology', to: '/docs/methodology/overview'},
          ],
        },
        {
          title: 'Legal',
          items: [
            {label: 'Factual data, not advice', to: '/docs/legal/not-advice'},
            {label: 'Licensing', to: '/docs/legal/licensing'},
          ],
        },
        {
          title: 'BTC Alpha',
          items: [{label: 'btcalpha.com.au', href: 'https://btcalpha.com.au'}],
        },
      ],
      copyright:
        'BTC Alpha is operated by ISI Australia Pty Ltd · ABN 27 652 105 345. ' +
        'Backtested / modelled historical data for professional & institutional use. ' +
        'Past performance is not indicative of future results — not advice, not a recommendation, not a forecast.',
    },
    prism: {
      theme: prismThemes.oneLight,
      darkTheme: prismThemes.oneDark,
      additionalLanguages: ['bash', 'json', 'python'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
