module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  //presets: ['@storybook/addon-docs/preset'],

  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/preset-scss",
  ],
  core: {
    builder: "@storybook/builder-webpack5",
    disableTelemetry: true, // 👈 Disables telemetry
  },
}