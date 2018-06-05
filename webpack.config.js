module.exports = {
    entry: __dirname + '/src/index.js',
    devServer: {
        contentBase:"./dist",
        historyApiFallback:true,
        inline:true
    },
    output: {
        path:__dirname + '/dist',
        filename: "bundle.js"
    },
    loader: {
        rules:[
            {
                test:/(\.jsx|\.js)$/,
                use:{
                    loader:"bable-loader",
                    options:{
                        preset:["env","react"]
                    }
                },
                exclude:/node_modules/
            },
            {
                test:/\.css$/,
                use:[
                    {
                        loader:"style-loader"
                    },
                    {
                        loader:"css-loader"
                    }
                ]
            }
        ]
    }
}