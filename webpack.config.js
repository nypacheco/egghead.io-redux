let path = require('path');
let webpack = require('webpack');

module.exports = {
    entry: './src/index.js',
    output: {path: path.resolve(__dirname, 'static'), filename: 'bundle.js'},
    devtool: 'source-map',
    devServer: {
        contentBase: 'static',
        inline: true,
        port: 8080,
        hot: true
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            { test: /\.html$/, loader: "file?name=[name].[ext]" }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
};
