module.exports = {
  webpack: (config) => {
    config.node = {
      fs: 'empty'
    }
    config.module.rules.push({
      test: /\.svg$/,
      issuer: {
        test: /\.(js|ts)x?$/,
      },
      use: ['@svgr/webpack'],
    })
    return config
  }
};
