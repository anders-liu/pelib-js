const path = require("path");

module.exports = {
    entry: path.resolve(__dirname, "entry.ts"),
    target: "web",
    output: {
        path: path.resolve(__dirname, "../out/webpack"),
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