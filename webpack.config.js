const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const path = require('path');

module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, 'src/app/index.tsx'),
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                options: {
                    experimentalWatchApi: true,
                    transpileOnly: true
                },
                include: path.resolve(__dirname, 'src/app')
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'main.css'
        }),
        new CopyWebpackPlugin(
            [
                {
                    from: path.resolve(__dirname, 'src/fonts'),
                    to: path.resolve(__dirname, 'dist/fonts'),
                },
                {
                    from: path.resolve(__dirname, 'src/images'),
                    to: path.resolve(__dirname, 'dist/images'),
                },
                {
                    from: path.resolve(__dirname, 'src/index.html'),
                    to: path.resolve(__dirname, 'dist/index.html'),
                },
                {
                    from: path.resolve(__dirname, 'src/styles'),
                    to: path.resolve(__dirname, 'dist/styles'),
                }
            ],
            {}
        ),
        new CleanWebpackPlugin(['dist']),
    ],
    watch: true,
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },
};
