const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  publicPath: ".",
  transpileDependencies: true,
  lintOnSave: false,
  devServer: {
    host: "0.0.0.0",
  },
  pages: {
    index: "src/main.js",
    callback: "src/authentication/main.js",
  },
});
