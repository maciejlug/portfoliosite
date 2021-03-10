module.exports = {
  siteMetadata: {
    title: "portfolio",
  },
  plugins: [`gatsby-plugin-fontawesome-css`,
  {
    resolve: `gatsby-plugin-google-fonts`,
    options: {
      fonts: [
        `Roboto`,
      ],
      display: 'swap'
    }
  }],
};
