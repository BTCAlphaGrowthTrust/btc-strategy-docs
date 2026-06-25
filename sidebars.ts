import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

/**
 * Phase 2: Get Started (authored) + API Reference (auto-generated from openapi.json by
 * docusaurus-plugin-openapi-docs). The generated sidebar lives at docs/api-reference/sidebar.ts
 * (gitignored); we require it through a guard so a clean checkout can run gen-api first.
 * The full hand-authored Core Concepts / Methodology / Legal nav lands with content.
 */
let apiItems: any[] = [];
try {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  apiItems = require('./docs/api-reference/sidebar').default ?? [];
} catch {
  apiItems = [];
}

const sidebars: SidebarsConfig = {
  docsSidebar: [
    {
      type: 'category',
      label: 'Get Started',
      collapsed: false,
      items: ['get-started/quickstart'],
    },
    {
      type: 'category',
      label: 'API Reference',
      link: {type: 'generated-index', title: 'API Reference', slug: '/api-reference'},
      items: apiItems,
    },
  ],
};

export default sidebars;
