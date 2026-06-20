const repository = process.env.GITHUB_REPOSITORY || 'zeturn/project';
const [ownerName, projectName] = repository.split('/');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: `${projectName} Docs`,
  tagline: 'Project documentation',
  url: `https://${ownerName}.github.io`,
  baseUrl: `/${projectName}/`,
  organizationName: ownerName,
  projectName,
  trailingSlash: false,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: 'docs',
          sidebarPath: false,
        },
        blog: false,
      },
    ],
  ],
  themeConfig: {
    navbar: {
      title: `${projectName} Docs`,
      items: [
        {to: '/docs/intro', label: 'Docs', position: 'left'},
        {href: `https://github.com/${repository}`, label: 'GitHub', position: 'right'},
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Project',
          items: [
            {label: 'GitHub', href: `https://github.com/${repository}`},
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} ${ownerName}`,
    },
  },
};

module.exports = config;
