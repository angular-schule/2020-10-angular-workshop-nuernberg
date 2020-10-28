module.exports = {
   entry: "./main.ts",
   output: { filename: "main.bundle.js" },
   resolve: { extensions: [".ts"] },
   module: { 
      rules: { 
        test: "/\.ts$/", loader: "ts-loader"
      }
   },
   mode: "development",
   devtool: "inline-source-map"
}