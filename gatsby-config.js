module.exports = {
  siteMetadata: {
    title: "Gatsby eslint scss analytics starter",
    author: "José Francisco",
    description: "A gatsby starter with ESLint, scss and analytics",
    keywords: "gatsby, starter, eslint, scss, analytics",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sass",
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
