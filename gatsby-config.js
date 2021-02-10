module.exports = {
  siteMetadata: {
    title: "ATM Test",
  },
  plugins: [
    {
      resolve: "gatsby-plugin-postcss",
      options: { 
        postcssOptions: {
          plugins: [
            require("autoprefixer"),
            require("postcss-preset-env")({ stage: 0 })
          ]
        }
      }
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /images/
        }
      }
    }
  ],
};
