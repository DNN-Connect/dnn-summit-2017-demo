var path = require('path'),
    webpack = require('webpack');

module.exports = {
    context: path.resolve(__dirname, '.'),
    entry: "./scripts/src/App.tsx",
    output: {
        path: path.resolve(__dirname, './scripts/bundles/'),
        publicPath: '/scripts/bundles/',
        filename: 'demo-bundle.js'
    },
    devtool: '#source-map',
    resolve: {
        extensions: ['*', '.webpack.js', '.web.js', '.ts', '.tsx', '.js', '.jsx']
    },
    module: {
        loaders: [{
            test: /\.tsx?$/,
            loader: 'ts-loader'
        }]
    },
    externals: {
        'jquery': 'jQuery'
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
        }),
        // new webpack.optimize.UglifyJsPlugin({
        //     compress: { warnings: false }
        // })
    ]
}