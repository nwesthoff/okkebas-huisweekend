module.exports = {
  siteMetadata: {
    title: "Okkebas Huisweekend",
    description: "Okkebas Huisweekend",
    keywords: "Okkebas Huisweekend things"
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    "gatsby-plugin-typescript",
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-embed-video",
            options: {
              width: 860,
              ratio: 1.77,
              related: false,
              noIframeBorder: true
            }
          },
          "gatsby-remark-responsive-iframe"
        ]
      }
    },
    "gatsby-image",
    "gatsby-plugin-styled-components",
    "gatsby-plugin-offline",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "posts",
        path: `${__dirname}/src/posts`,
        ignore: ["**/.tsx*"]
      }
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        defaultLayouts: {
          posts: require.resolve("./src/components/postLayout.tsx"),
          default: require.resolve("./src/components/postLayout.tsx")
        }
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Okkebas Huisweekend",
        short_name: "Huisweekend",
        start_url: "/",
        background_color: "#B54D49",
        theme_color: "#B54D49",
        display: "minimal-ui",
        icon: "src/images/logo.svg" // This path is relative to the root of the site.
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
  ]
};
