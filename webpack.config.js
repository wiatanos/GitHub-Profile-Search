const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


module.exports = {
    devtool: 'source-map',
    entry: "./src/index.js",
    output: {
        path: path.join(__dirname, "/dist"),
        filename: "index_bundle.js",
        publicPath: '/'
    },
    resolve: {
        modules: [
            path.resolve(__dirname, 'node_modules'),
            path.resolve(__dirname, './'),
            path.resolve(__dirname, './src/assets/styles/'),
        ],
        alias: {
            styles: path.join(__dirname, './src/assets/styles/') 
        }
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-react']
                }
            }
        },{
            test: /\.(scss|css)$/,
            use: [
              MiniCssExtractPlugin.loader,
              'css-loader',
              'sass-loader',
            ],
        },
        {
            test: /\.(png|jpg)$/,
            use: [
                {
                    loader: 'file-loader'
                }
            ]
        }
        ]
    },
    devServer: {
        historyApiFallback: true,
    },
    plugins: [
        new HtmlWebPackPlugin({
            hash: true,
            filename: "index.html",  //target html
            template: "./web/index.html" //source html
        }),
        new MiniCssExtractPlugin({
            filename: 'css/main.css',
        }),
    ]
}