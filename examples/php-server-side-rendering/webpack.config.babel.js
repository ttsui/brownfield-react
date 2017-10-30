const path = require('path');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const entryPoints = {
    main: './src/index.js'
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
