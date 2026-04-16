// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isProduction = process.env.NODE_ENV === 'production';


const stylesHandler = MiniCssExtractPlugin.loader;



const config = {
    entry: {
        index:    './src/js/index.js',
        session:  './src/js/session.js',
        listen:   './src/js/listen.js',
        evidence: './src/js/evidence.js',
        process:  './src/js/process.js'
        
    },
    output: {
        filename: 'js/[name].js',
        path: path.resolve(__dirname, 'dist'),
    },
    devServer: {
        open: true,
        host: 'localhost',
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            inject: true,
            chunks: ['index'],
            filename: 'index.html'
        }),
        new HtmlWebpackPlugin({
            template: './src/session/index.html',
            inject: true,
            chunks: ['session'],
            filename: 'session/index.html'
        }),
         new HtmlWebpackPlugin({
            template: './src/listen/index.html',
            inject: true,
            chunks: ['listen'],
            filename: 'listen/index.html'
        }),
         new HtmlWebpackPlugin({
            template: './src/evidence/index.html',
            inject: true,
            chunks: ['evidence'],
            filename: 'evidence/index.html'
        }),
         new HtmlWebpackPlugin({
            template: './src/process/index.html',
            inject: true,
            chunks: ['process'],
            filename: 'process/index.html'
        }),

        new MiniCssExtractPlugin(),

        // Add your plugins here
        // Learn more about plugins from https://webpack.js.org/configuration/plugins/
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/i,
                loader: 'babel-loader',
            },
            {
                test: /\.less$/i,
                use: [stylesHandler, 'css-loader', 'postcss-loader', 'less-loader'],
            },
            {
                test: /\.css$/i,
                use: [stylesHandler, 'css-loader', 'postcss-loader'],
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
                type: 'asset',
            },
            
            {
                test: /\.html$/i,
                use: ['html-loader'],
            },

            // Add your rules for custom modules here
            // Learn more about loaders from https://webpack.js.org/loaders/
        ],
    },
};

module.exports = () => {
    if (isProduction) {
        config.mode = 'production';
        
        
    } else {
        config.mode = 'development';
    }
    return config;
};
