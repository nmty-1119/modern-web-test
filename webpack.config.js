const path = require('path');

module.exports = (env, argv) => {
  return {
    mode: argv.mode || 'development',
    watchOptions: {
      ignored: '/node_modules/',
    },
    entry: {
      app: './src/index.js',
    },
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist/js'),
    },
    devServer: {
      contentBase: path.resolve(__dirname, 'dist'),
      open: true,
      port: 30000,
    },
    module: {
      rules: [
        {
          enforce: 'pre',
          test: /\.js$/,
          exclude: /(node_modules|dist)/,
          loader: 'eslint-loader',
          options: {
            fix: true,
          },
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env'],
              },
            },
          ],
        },
      ],
    },
    optimization: {
      splitChunks: {
        cacheGroups: {
          vendor: {
            test: /node_modules/,
            name: 'vendor',
            chunks: 'initial',
          },
        },
      },
    },
  };
};
