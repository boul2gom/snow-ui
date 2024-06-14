/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
  stories: ["../src/**/*.mdx", "../src/**/*.story.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@chromatic-com/storybook",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",

    'storybook-dark-mode',
    '@storybook/addon-styling-webpack',
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
};
export default config;
