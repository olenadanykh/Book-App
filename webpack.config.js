const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require('path');
const htmlPlugin = new HtmlWebPackPlugin ({
    template: "./index.html"
});
module.exports = {
    entry: './client/index.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },
    // mode: 'production',
    mode: 'development',
    devServer: {
        contentBase: path.join(__dirname, 'build'),
        compress: true,
        port: 8080,
      },
    module: {
        rules: [
            {
              test: /\.jsx?$/,
              exclude: /node_modules/,
              use:{
                loader: 'babel-loader',
                options:{
                    presets: ['@babel/preset-env', '@babel/preset-react']
                }
                    }
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader','sass-loader']
            }
          ],
            },
            plugins: [htmlPlugin]
        };


            //change mode to development before

// devServer: {
//     publicPath:'/build/',
//     proxy: {
//         '/api': 'http://localhost:3000',
//     }
// }
// };