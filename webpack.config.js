var webpack = require( 'webpack' );
var ExtractTextPlugin = require( 'extract-text-webpack-plugin' );
var path = require( 'path' );

module.exports = {
    entry: [
        'webpack-dev-server/client?http://0.0.0.0:3500',
        'webpack/hot/only-dev-server',
        './app.js'
    ],
    output: {
        path: path.join( __dirname, '/static/' ),
        publicPath: '/assets/',
        filename: 'bundle.js',
        hot: true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new ExtractTextPlugin( 'app.css' )
    ],
    module: {
        loaders: [ {
            test: /\.js$/,
            loaders: [ 'react-hot', 'babel' ],
            exclude: /node_modules/
        }, {
            test: /\.css$/,
            loader: ExtractTextPlugin.extract( 'css-loader?module!cssnext-loader' )
        } ]
    },
    resolve: {
        extensions: [ '', '.js', '.json' ],
        root: path.join( __dirname, 'node_modules' )
    }
};
