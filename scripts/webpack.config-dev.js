const path = require("path")
const webpack = require("webpack")
const HtmlWebpackPlugin = require('html-webpack-plugin');


const PATHS = {
    src: path.join(__dirname, "..", "src"),
    site: path.join(__dirname, "..", "site"),
    appHtml: path.join(__dirname, "..", "site/public/index.html"),
}

const config = {
    entry: [PATHS.site + "/src/index.js"],
    output: {
        path: PATHS.site + "/dist",
        filename: "main.js"
    },
    plugins: [
        // Generates an `index.html` file with the <script> injected.
        new HtmlWebpackPlugin(
            {
                inject: true,
                template: PATHS.appHtml,
                minify: {
                    removeComments: true,
                    collapseWhitespace: true,
                    removeRedundantAttributes: true,
                    useShortDoctype: true,
                    removeEmptyAttributes: true,
                    removeStyleLinkTypeAttributes: true,
                    keepClosingSlash: true,
                    minifyJS: true,
                    minifyCSS: true,
                    minifyURLs: true,
                }
            }
        ),
    ],
    optimization: {
        minimize: false //Update this to true or false
    },
    resolve: {
        extensions: [".js", ".json", ".css", ".scss"]
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: [
                    {
                        loader: "babel-loader"
                    }
                ],
                include: [PATHS.src, PATHS.site]
            },
            {
                test: /\.s?css$/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader"
                    },
                    {
                        loader: "sass-loader"
                    }
                ]
            },
            {
                test: /\.html$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "html-loader"
                    }
                ]
            }
        ]
    }
}

module.exports = config
