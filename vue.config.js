const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
  transpileDependencies: true,
  // 生产环境下是否生称sourceMap文件
  productionSourceMap: false,
  lintOnSave: true,
  devServer: {
    port: 8888,
    proxy: {
      '/proxy': {
        target: process.env.VUE_APP_PROXY_URL,
        changeOrigin: true,
        pathRewrite: { '^/proxy': '' },
      },
    },
  },
});
