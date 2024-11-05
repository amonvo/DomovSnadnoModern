module.exports = {
  siteMetadata: {
    title: `Domov Snadno`,
    description: `Najděte spolehlivé řemeslníky a partnery pro vaše projekty.`,
    author: `@domovsnadno`,
    siteUrl: `https://domovsnadno.cz`, // změňte na skutečnou URL, pokud máte
  },
  plugins: [
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `domov-snadno`,
        short_name: `domov`,
        start_url: `/`,
        background_color: `#333333`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // Cesta k ikoně webu
      },
    },
  ],
}
