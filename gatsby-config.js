console.log("process.env.CONTENTFUL_SPACE_ID ", process.env.CONTENTFUL_SPACE_ID )
console.log("process.env.CONTENTFUL_ACCESS_TOKEN ", process.env.CONTENTFUL_ACCESS_TOKEN )
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
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          placeholder: `dominantColor`,
          quality: 50,
          backgroundColor: `transparent`,
        }
      }
    },
    `gatsby-transformer-sharp`, // Needed for dynamic images
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID || '9n26ii2jl04i',
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || 'ZCqEqIsgTQNALqyXNZ4hPPfU4zVAQELn5NRMKvmbJAc',
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
