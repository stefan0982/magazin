module.exports = {
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: "8xsSeMEluwXYR2xavM5fCaWdrW-uJennFYYpBlENnlw",
        spaceId: "jqwb48lwq7jv",
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    // "gatsby-plugin-sitemap",
    "gatsby-plugin-sharp",
    `gatsby-plugin-material-ui`,
    "gatsby-transformer-sharp",
    `gatsby-plugin-layout`,
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
