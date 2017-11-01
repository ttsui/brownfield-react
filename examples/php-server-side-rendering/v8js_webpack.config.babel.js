const path = require('path');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const entryPoints = {
    'v8js_index': './src/v8js_index.js'
};

export default () => (
    {
        entry: entryPoints,
        devtool: 'source-map',
        output: {
            path: path.resolve(__dirname, './dist'),
            filename: '[name].js',
            libraryTarget: 'umd',
            library: '[name]'
        },
        module: {
            rules: [
                {test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"}
            ]
        },
        // plugins: [new BundleAnalyzerPlugin({
        //     analyzerMode: 'static'
        // })]
    }
);
