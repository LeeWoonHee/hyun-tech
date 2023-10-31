module.exports = {
  css                  : {
    loaderOptions: {
      sass: {
        data: `@import "@/assets/scss/main.scss";`
      }
    }
  },
  publicPath           : '/',
  transpileDependencies: [
    'vue-echarts',
    'resize-detector'
  ],
  configureWebpack     : {
    optimization: {
      splitChunks: {
        chunks: 'all'
      }
    }
  },

  pluginOptions: {
    s3Deploy: {
      awsProfile       : 'hyun-tech-s3-deployer',
      region           : 'ap-northeast-2',
      bucket           : 'www.hyuntech.net',
      uploadConcurrency: 3,
      registry         : undefined,
      overrideEndpoint : false,
      createBucket     : true,
      staticHosting    : true,
      assetPath        : 'dist',
      assetMatch       : '**',
      deployPath       : '/',
      acl              : 'bucket-owner-full-control',
      pwa              : false,
      enableCloudfront : true,
      cloudfrontId     : 'E3QIUV0A4IQR4X',
      pluginVersion    : '4.0.0-rc3',
      staticIndexPage  : 'index.html',
      staticErrorPage  : 'index.html'
    }
  }
}

