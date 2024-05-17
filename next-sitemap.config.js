/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl: 'https://bloomingagriafrica.tn/',
  changefreq: 'daily',
  priority: 0.7,
  sitemapSize: 5000,
  generateRobotsTxt: true,
  transform: async (config, path) => {
    // Customize the transformation function if needed
    return {
      loc: path,
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      alternateRefs: config.alternateRefs ?? [],
    }
  },
  additionalPaths: async (config) => [
    // Include additional paths if needed
    await config.transform(config, '/additional-page'),
  ],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*', // Apply to all bots
        allow: '/',
      },
      {
        userAgent: 'bad-bot-1', // Replace with the actual user agent of the first bad bot
        disallow: '/',
      },
      {
        userAgent: 'bad-bot-2', // Replace with the actual user agent of the second bad bot
        disallow: '/',
      },
    ],
  },
  // Define a function to generate dynamic sitemap entries for each locale
  dynamicPages: async () => {
    const { getServerSideProps } = require('next/server/router');

    // Fetch all available pages for each locale (en, fr, ar)
    const locales = ['en', 'fr', 'ar'];
    let pages = [];

    for (const locale of locales) {
      const { props } = await getServerSideProps({
        req: {
          url: `/api/sitemap/${locale}`,
          headers: {
            'Accept-Language': locale,
          },
        },
        res: {},
      });

      pages = pages.concat(props.pages);
    }

    return pages;
  },
};

  