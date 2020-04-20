module.exports = {
  stories: ['../src/components/**/*.stories.js'],
  addons: ['@storybook/addon-actions', '@storybook/addon-links'],
  webpackFinal: (config) => console.dir(config, { depth: null }) || config,
};
