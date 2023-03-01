// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'Pulsar Weekly',
    tagline: 'Brining you news about the development of Apache Pulsar and its open and inclusive community.',
    url: 'https://pulsarweekly.vercel.app',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',

    // Even if you don't use internalization, you can use this field to set useful
    // metadata like html lang. For example, if your site is Chinese, you may want
    // to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: 'en',
        locales: ['en'],
    },

    presets: [
        [
            'classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: false,
                blog: {
                    path: 'issue',
                    routeBasePath: 'issue',
                    blogSidebarTitle: 'Issues',
                    blogSidebarCount: 'ALL',
                    showReadingTime: true,
                    editUrl: 'https://github.com/tisonkun/pulsarweekly/tree/main',
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            }),
        ],
    ],

    themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            navbar: {
                title: 'Pulsar Weekly',
                items: [
                    {to: '/issue', label: 'Issue', position: 'right'},
                    {
                        type: 'dropdown',
                        position: 'right',
                        label: 'Feed',
                        items: [
                            { to: '/issue/atom.xml', label: 'Atom' },
                            { to: '/issue/rss.xml', label: 'RSS' },
                        ],
                    },
                ],
            },
            footer: {
                style: 'dark',
                links: [],
                copyright: `Copyright © ${new Date().getFullYear()} tison &lt;wander4096@gmail.com&gt;. Built with Docusaurus.<br/>`
                    + `Apache, Pulsar, Apache Pulsar, and the Apache feather logo are trademarks or registered trademarks of The Apache Software Foundation.`,
            },
            prism: {
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme,
            },
        }),
};

module.exports = config;
