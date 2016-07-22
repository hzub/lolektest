var webpack = require("webpack");
var path = require("path");

module.exports = {
    context: __dirname + "/src",
    cache: true,
    entry: {
        index: './index'
    },
    output: {
        path: path.join(__dirname, "dist"),
        publicPath: "/",
        filename: "[name].js",
        chunkFilename: "[chunkhash].js"
    },
};
