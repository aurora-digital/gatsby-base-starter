const autoprefixer = require("autoprefixer");

module.exports = {
  siteMetadata: {
    title: "Gatsby eslint scss analytics starter",
    author: "José Francisco",
    description: "A gatsby starter with ESLint, scss and analytics",
    keywords: "gatsby, starter, eslint, scss, analytics",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-postcss-sass",
      options: {
        postCssPlugins: [
          autoprefixer({
            browsers: ["last 2 versions"],
          }),
        ],
        precision: 8,
      },
    },
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "trackingIDhere",
        head: true,
        anonymize: true,
      },
    },
  ],
};
