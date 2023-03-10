const path = require('path');

module.exports = {
    entry: {
        bundle: './src/index.ts'
    },
    output: {
        path:path.join(__dirname, 'dist'),
        filename: '[name].js'
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist'),
        }
    },
    module: {
        rules: [
            {
                use: 'ts-loader',
                test: /\.ts$/
            }
        ]
    }
}