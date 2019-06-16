const path = require("path");
const webpack = require("webpack");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const CURRENT_WORKING_DIR = process.cwd();

const config = {
  mode: "production",
  entry: [path.join(CURRENT_WORKING_DIR, "client/main.js")],
  output: {
    path: path.join(CURRENT_WORKING_DIR, "/dist"),
    filename: "bundle.js",
    publicPath: "/dist/"
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        test: /\.(ttf|eot|svg|gif|jpg|png)(\?[\s\S]+)?$/,
        use: "file-loader"
      }
    ]
  },
  plugins: [
    new CopyWebpackPlugin([
      {
        from: path.join(
          CURRENT_WORKING_DIR,
          "/client/assets/images/",
          "/favicon.ico"
        ),
        to: path.join(CURRENT_WORKING_DIR, "dist/favicon.ico")
      }
    ])
  ]
};

module.exports = config;
