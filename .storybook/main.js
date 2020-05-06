const path = require('path');
module.exports = {
  stories: ['../src/components/**/*.stories.js'],
  addons: ['@storybook/addon-actions', '@storybook/addon-links'],
  webpackFinal: async (config, {configType}) => {
    console.dir(config, { depth: null }) || config;
    config.module.rules.push({
      test: /\.scss$/,
      use: ['style-loader', {
        loader: 'css-loader',
        options: {
          importLoaders: 1,
          modules: true
        }
      }, 'sass-loader'],
      include: path.resolve(__dirname, '../'),
    });  
    return config;
  } 
};
