const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  publicPath: ".",
  transpileDependencies: true,
  lintOnSave: false,
  devServer: {
    host: "192.1.2.55",
  },
  pages: {
    index: "src/main.js",
    callback: "src/authentication/main.js",
  },
});
