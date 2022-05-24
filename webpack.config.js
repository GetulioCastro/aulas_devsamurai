module.exports = {
    entry: ["@babel/polyfill", "./src/index.js"],
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node-modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    }
}