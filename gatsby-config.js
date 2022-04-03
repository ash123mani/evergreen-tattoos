if (process.env.NODE_ENV === 'development') {
  require('dotenv').config({
    path: `.env.${process.env.NODE_ENV}`,
  })
}

module.exports = {
  siteMetadata: {
    title: `EverGreen Tattoos`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        displayName: true,
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`, // Needed for dynamic images
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Ever Green Tattoo Art',
        short_name: 'Ever Green Tattoo',
        description: 'Ever Green Tattoo, Hampi (Vijay Nagar)',
        lang: `en`,
        display: `standalone`,
        icon: 'src/images/eg-logo.jpg'
      }
    }
  ],
}
