module.exports = {
  siteMetadata: {
    title: 'Junior Form Function & Class 2019',
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
        icon: 'src/images/logo-illustration-only.png', // This path is relative to the root of the site.
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
