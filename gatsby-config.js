module.exports = {
  siteMetadata: {
    title: `RNR Interiors`,
    description: `RNR Interiors. You dream it... We make it. Experts in end to end quality home interiors and renovations.
    We help you in building your dream house with the help of qualified professionals and experts.`,
    author: `Kishore`,
    siteUrl: `https://www.rnrinteriors.in`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `RNR Interiors`,
        short_name: `RNR Interiors`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#4dc0b5`,
        display: `minimal-ui`,
        icon: `static/favicon-32x32.png`,
        icons: [
          {
            src: `static/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `stacic/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content`,
        name: 'services'
      }
    },
    'gatsby-transformer-remark',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-postcss',
    {
      resolve: "gatsby-plugin-purgecss",
      options: {
        tailwind: true,
        purgeOnly: ["src/css/style.css"]
      }
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-sitemap'
  ]
};
