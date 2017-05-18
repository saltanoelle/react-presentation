module.exports = {
  entry: [
    "./src/index.jsx"
  ],
  output: {
    path: __dirname,
    publicPath: "/",
    filename: "bundle.js"
  },
  module: {
    loaders: [{
      test: /\.jsx$/,
      include: `${__dirname}/src`,
      loaders: ["babel-loader"]
    }]
  },
  resolve: {
    modules: ["node_modules"],
    extensions: [".js", ".jsx"]
  },
  devServer: {
    historyApiFallback: true,
    contentBase: "./"
  }
};
