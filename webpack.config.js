var path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/ColorBook.jsx',
    output: {
        path: path.resolve('lib'),
        filename: 'ColorBook.js',
        libraryTarget: 'commonjs2'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                use: 'babel-loader'
            }
        ]
    }
}