module.exports = {
  //configureWebpack: {
  //    //devtool: 'source-map'
  //},
  // .Maybe I should comment this out for production environment.

  publicPath: process.env.NODE_ENV === 'production'
    ? '/doggo/'
    : '/'
  // .For deploy to github pages.

  // .Testing purpose.
  // =================
  //publicPath: '/aabbccddee/',
  //assetsDir: '/aabbccddee/',
  //outputDir: 'disttt',
  // =================
}
