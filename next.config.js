const withCSS = require('@zeit/next-css')
/**
 * next 官网推荐写法
 */
if (typeof require !== undefined) {
  require.extensions['.css'] = file => ({})
}

/**
 * 如果有一个叫 withLess
 * 则可以 withLess(withCSS({}))
 */

module.exports = withCSS({
  webpack: config => {
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: 'empty'
    }

    return config
  }
})
