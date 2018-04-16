var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var providePlugin = new webpack.ProvidePlugin({$: 'jquery', jQuery: 'jquery', 'window.jQuery': 'jquery'});  //jquery全局库

var config = {
    entry: './src/js/entry.js',   //入口文件，如果多个页面需要多个入口文件，就写成对象
    output: {
        filename: 'index.js',     //如果打包出多个文件，写成[name].js
        path: __dirname + '/out',
        publicPath: './out'         //图片资源路径
    },
    module: {   //加载器
        rules: [
            {test: /.js$/, use: ['babel-loader']},  //将es6语法转换成es5
            {test: /.css$/, use: ['style-loader', 'css-loader'] },  //将css文件转换为js文件
            // {test: /.css$/, use: ExtractTextPlugin.extract({fallback: 'style-loader',use: 'css-loader'})},  //独立打包css文件
            {test: /.(jpg|png|gif|svg)$/, use: ['url-loader?limit=8192&name=/[name].[ext]']},  //将图片、文件资源打包
            {test: /.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'], include: []},
              //转换sass为css
            // {
            //     test: /\.scss$/,
            //     loader: ExtractTextPlugin.extract("style", 'css!sass'), //这里用了样式分离出来的插件，如果不想分离出来，可以直接这样写 loader:'style!css!sass'
            //     include: []
            // }

        ]
    },
    plugins: [providePlugin]
}
module.exports = config;