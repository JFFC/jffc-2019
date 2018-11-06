module.exports = {
  pathPrefix: `/img`,
  siteMetadata: {
    title: 'Junior Form Function & Class 2019',
    siteUrl: 'https://jffc.asia',
    description: 'The Premier Student Web Design Conference in Asia.'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'jffc-2019',
        short_name: 'jffc',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/logos/jffcillustration.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images/logos`,
        name: 'images',
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`,
      },
    },
    'gatsby-plugin-sass',
  ],
}
