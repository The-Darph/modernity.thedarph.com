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
        process:  './src/js/process.js',
        '404':    './src/js/404.js'
        
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

         // === Artifact Pages ===\\
         new HtmlWebpackPlugin({
            template: './src/evidence/american_kirk.html',
            inject: true,
            chunks: ['evidence'],
            filename: 'evidence/american_kirk.html'
        }),
         new HtmlWebpackPlugin({
            template: './src/evidence/atom_bomb.html',
            inject: true,
            chunks: ['evidence'],
            filename: 'evidence/atom_bomb.html'
        }),
         new HtmlWebpackPlugin({
            template: './src/evidence/custom_tape_archive.html',
            inject: true,
            chunks: ['evidence'],
            filename: 'evidence/custom_tape_archive.html'
        }),
         new HtmlWebpackPlugin({
            template: './src/evidence/darkness_dominator_host.html',
            inject: true,
            chunks: ['evidence'],
            filename: 'evidence/darkness_dominator_host.html'
        }),
         new HtmlWebpackPlugin({
            template: './src/evidence/domestic_surveillance_memo.html',
            inject: true,
            chunks: ['evidence'],
            filename: 'evidence/domestic_surveillance_memo.html'
        }),
         new HtmlWebpackPlugin({
            template: './src/evidence/how_it_is.html',
            inject: true,
            chunks: ['evidence'],
            filename: 'evidence/how_it_is.html'
        }),
         new HtmlWebpackPlugin({
            template: './src/evidence/influencer.html',
            inject: true,
            chunks: ['evidence'],
            filename: 'evidence/influencer.html'
        }),
         new HtmlWebpackPlugin({
            template: './src/evidence/manufactured_consent_surveillance.html',
            inject: true,
            chunks: ['evidence'],
            filename: 'evidence/manufactured_consent_surveillance.html'
        }),
         new HtmlWebpackPlugin({
            template: './src/evidence/NSPM-7_threat_assessment.html',
            inject: true,
            chunks: ['evidence'],
            filename: 'evidence/NSPM-7_threat_assessment.html'
        }),
         new HtmlWebpackPlugin({
            template: './src/evidence/source_of_extra_chromosomes.html',
            inject: true,
            chunks: ['evidence'],
            filename: 'evidence/source_of_extra_chromosomes.html'
        }),
         new HtmlWebpackPlugin({
            template: './src/evidence/tape_archive_1.html',
            inject: true,
            chunks: ['evidence'],
            filename: 'evidence/tape_archive_1.html'
        }),
        // === End Artifact Pages ===\\

        new HtmlWebpackPlugin({
            template: './src/process/index.html',
            inject: true,
            chunks: ['process'],
            filename: 'process/index.html'
        }),
        new HtmlWebpackPlugin({
            template: './src/404.html',
            inject: true,
            chunks: ['404'],
            filename: '404.html'
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
