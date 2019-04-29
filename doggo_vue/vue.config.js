module.expots = {
  configureWebpack: {
      devtool: 'source-map'
      // .Maybe I should comment this out for production environment.
  },
  publicPath: process.env.NODE_ENV === 'production'
    ? '/doggo/'
    : '/'
  // .For deploy to github pages.
}
