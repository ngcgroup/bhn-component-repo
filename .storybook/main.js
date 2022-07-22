const path = require('path');
const dotenv = require('dotenv');
//import { configure, addDecorator } from '@storybook/react';
/*const storybookDotenv = require('dotenv').config({
	path: path.resolve(__dirname, '.env'),
});*/
function injectEnv(definitions) {
  const env = 'process.env';

  if (!definitions[env]) {
    return {
      ...definitions,
      [env]: JSON.stringify(
        Object.fromEntries(
          Object.entries(definitions)
            .filter(([key]) => key.startsWith(env))
            .map(([key, value]) => [key.substring(env.length + 1), JSON.parse(value)]),
        ),
      ),
    };
  }
  return definitions;
};

module.exports = {
  stories: [
    "../src/**/*.stories.mdx", 
    "../src/**/*.stories.@(js|jsx|ts|tsx)",
    '../packages/bhn-security-widget/src/**/*.stories.@(js|jsx|ts|d.ts|tsx)',
    '../packages/bhn-identity-widget/src/**/*.stories.@(js|jsx|ts|d.ts|tsx)',

  ],
  //presets: ['@storybook/addon-docs/preset'],

  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/preset-scss",
  ],
  core: {
    builder: "@storybook/builder-webpack5",
  },
  
  webpackFinal: async config => {
    const definePlugin = config.plugins.find(
      ({ constructor }) => constructor && constructor.name === 'DefinePlugin',
    );
    if (definePlugin) {
      definePlugin.definitions = injectEnv(definePlugin.definitions);
    }
    //console.log(definePlugin.definitions);

    return config;
  }, 
};
