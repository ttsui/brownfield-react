const path = require('path');
const webpack = require('webpack');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const entryPoints = {
    'react_php_v8js_index': './src/react_php_v8js_index.js'
};

export default () => (
    {
        entry: entryPoints,
        devtool: 'source-map',
        externals: { react: 'React', 'react-dom': 'ReactDOM' },
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
      plugins: [
        // new webpack.optimize.CommonsChunkPlugin({
        //   name: "vendor",
        //
        //   minChunks: Infinity
        // }),
        // new BundleAnalyzerPlugin({ analyzerMode: 'static' })
      ]
    }
);
