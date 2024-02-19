const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "./", // Set publicPath to "./" for relative paths
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "public"),
    },
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: "asset/resource", // Use asset/resource for image files
      },
      {
        test: /\.svg$/,
        type: "asset/resource", // Use asset/resource for SVG files
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
};
