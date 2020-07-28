
const TerserPlugin = require("terser-webpack-plugin");

const config = {
  projectName: 'subiot',
  date: '2020-7-1',
  designWidth: 750,
  deviceRatio: {
    640: 2.34 / 2,
    750: 1,
    828: 1.81 / 2
  },
  sourceRoot: 'src',
  outputRoot: 'dist',
  plugins: [],
  framework: 'react',
  defineConstants: {
  },
  copy: {
    patterns: [
      {
        from: 'src/components/vant-weapp/wxs/',
        to: 'dist/components/vant-weapp/wxs/'
      }
    ],
    options: {
    }
  },
  terser: {
    enable: true,
    config: {
      // 配置项同 https://github.com/terser/terser#minify-options
    }
  },
  csso: {
    enable: true,
    config: {
      // 配置项同 https://github.com/css/csso#minifysource-options
    }
  },
  mini: {
    postcss: {
      pxtransform: {
        enable: true,
        config: {
          selectorBlackList: [
            /^.van-.*?$/,  // 这里是vant-weapp中className的匹配模式
          ]
        }
      },
      url: {
        enable: true,
        config: {
          limit: 1024 // 设定转换尺寸上限
        }
      },
      cssModules: {
        enable: true, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]'
        }
      }
    },

    lessLoaderOption: {
      strictMath: true,
      noIeCompat: true,
      modifyVars: {
        // 或者可以通过 less 文件覆盖（文件路径为绝对路径）
        'hack': `true; @import "~@/assets/theme.less";`
      }
    },
    cssLoaderOption: {
    },
    webpackChain(chain) {
      // chain.plugin('analyzer')
      //   .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin, [])
        
      chain.mode("production");
      chain.optimization.minimize(true);
      chain.plugin("terser").use(TerserPlugin, [
        {
          cache: true,
          extractComments: false,
          terserOptions: {
            output: {
              comments: false
            }
          }
        }
      ]);
    }
  },
  h5: {
    publicPath: '/',
    staticDirectory: 'static',
    postcss: {
      autoprefixer: {
        enable: true,
        config: {
        }
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'global', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]'
        }
      }
    }
  },
  alias: {
    '@/assets': require('path').resolve(__dirname, '..', 'src/assets')
  }
}

module.exports = function (merge) {
  if (process.env.NODE_ENV === 'development') {
    return merge({}, config, require('./dev'))
  }
  return merge({}, config, require('./prod'))
}
