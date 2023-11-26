import config from './gitprofile.config'
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
  daisyui: {
    logs: false,
    themes: [
      ...config.themeConfig.themes,
      { procyon: config.themeConfig.customTheme },
    ],
  },
};

