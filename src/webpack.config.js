module.exports = {
    entry: "./entry.ts",
    target: "web",
    output: {
        path: __dirname + "/../out/webpack",
        filename: "pelib.js",
        libraryTarget: "umd",
        library: "pelib"
    },
    devtool: "source-map",
    resolve: {
        extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
    },
    module: {
        rules: [
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
            { test: /\.ts$/, loader: "ts-loader" },
            { test: /\.js$/, loader: 'babel', query: { compact: false } }
        ]
    }
};