var ExtractTextPlugin = require('extract-text-webpack-plugin');

var js = {
    entry: ['./index'],
    output: { filename: './dist/marketing.js' },
    module: {
        loaders: [
            { test: /\.json$/, loader: 'json' },
            { test: /\.html$/, loader: 'html?minimize=false' },
            { test: /\.png$/,  loader: 'url-loader?mimetype=image/png' },
            { test: /\.jpeg$/, loader: 'url-loader?mimetype=image/jpeg' },
        ],
    }
};

var css = {
    entry: ['./index.css'],
    output: { filename: './tmp/marketing.css' },
    module: {
        loaders: [{
            test: /\.css$/,
            loader: ExtractTextPlugin.extract('style', 'css!sass')
        }]
    },
    plugins: [
        new ExtractTextPlugin('./dist/marketing.css')
    ]
};

module.exports = [js, css];
