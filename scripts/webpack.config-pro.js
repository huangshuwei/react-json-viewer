const path = require("path")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

const devMode = process.env.NODE_ENV !== 'production'

const PATHS = {
    src: path.join(__dirname, "..", "src"),
    pro: path.join(__dirname, "..", "dist"),
}

const config = {
    entry: [PATHS.src + "/index.js"],
    output: {
        path: PATHS.pro,
        filename: "main.js",
        library: "reactJsonView",
        libraryTarget: "umd"
    },
    plugins: [
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: "main.css",
            chunkFilename: "main.css"
        })
    ],
    optimization: {
        minimize: true //Update this to true or false
    },
    resolve: {
        extensions: [".js", ".json", ".css", ".scss"]
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "babel-loader"
                    }
                ],
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [ // 注：使用 mini-css-extract-plugin 不可使用 style-loader
                    {
                        loader: MiniCssExtractPlugin.loader
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
