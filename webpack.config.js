const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const path = require('path');

module.exports = {
    mode: 'production',
    entry: path.resolve(__dirname, 'src/app/Index.tsx'),
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
        new ForkTsCheckerWebpackPlugin(),
        new CopyWebpackPlugin(
            [
                {
                    from: path.resolve(__dirname, 'src/'),
                    to: path.resolve(__dirname, 'dist/'),
                    ignore: [
                        path.resolve(__dirname, 'src/app')
                    ]                    
                },
            ],
            {}
        ),
        new CleanWebpackPlugin(['dist']),
    ],
    watch: false,
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },
};
