const { defineConfig } = require('@vue/cli-service');

const path = require('path');
const resolve = dir => {
  return path.join(__dirname, dir);
};

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
  chainWebpack: config => {
    config.module.rule('svg').exclude.add(resolve('src/assets/svgs/svg')).end();
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/assets/svgs/svg'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]',
      })
      .end();
  },
});
