// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer").themes.github;
const darkCodeTheme = require("prism-react-renderer").themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "ProjectStarboy",
  tagline: "ProjectStarboy",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://projectstarboy.lorax.vn",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "lorax", // Usually your GitHub org/user name.
  projectName: "ProjectStarboy", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },
  markdown: {
    mermaid: true,
  },
  themes: ["@docusaurus/theme-mermaid"],
  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        docs: {
          sidebarPath: "./sidebars.js",
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/docusaurus-social-card.jpg",
      navbar: {
        title: "",
        logo: {
          alt: "ProjectStarboy Logo",
          src: "img/logo.png",
        },
        items: [
          {
            type: "doc",
            docId: "projectstarboy-framework/installation",
            position: "right",
            label: "Starboy Documents",
          },
          {
            type: "dropdown",
            label: "Addon",
            position: "right",
            items: [
              {
                type: "doc",
                label: "lr_boilerplate",
                docId: "lr_boilerplate/index",
              },
              {
                type: "doc",
                label: "lr_team",
                docId: "lr_team/index",
              },
              {
                type: "doc",
                label: "lr_npc",
                docId: "lr_npc/index",
              },
              {
                type: "doc",
                label: "lr_onscreen_navigation",
                docId: "lr_onscreen_navigation/index",
              },
              {
                type: "doc",
                label: "lr_addons",
                docId: "lr_addons/index",
              },
              // ... more items
            ],
          },
          {
            href: "https://github.com/Lorraxs/ProjectStarboy",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "More",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/Lorraxs/ProjectStarboy",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Lorraxs`,
      },
      prism: {
        theme: darkCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ["lua"],
      },
      algolia: {
        // The application ID provided by Algolia
        appId: "AJ2N2Q4C5N",

        // Public API key: it is safe to commit it
        apiKey: "d5821980970f6f2e20124eefc2a53e4e",

        indexName: "projectstarboy-lorax",

        // Optional: see doc section below
        contextualSearch: true,
        placeholder: "Search document",

        // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
        //externalUrlRegex: "external\\.com|domain\\.com",

        // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs
        //replaceSearchResultPathname: {
        //  from: "/docs/", // or as RegExp: /\/docs\//
        //  to: "/",
        //},

        // Optional: Algolia search parameters
        searchParameters: {},

        // Optional: path for search page that enabled by default (`false` to disable it)
        searchPagePath: "search",

        //... other Algolia params
      },
    }),
};

module.exports = config;
