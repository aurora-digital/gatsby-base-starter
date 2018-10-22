module.exports = {
  plugins: {
    "postcss-import": {},
    precss: {},
    autoprefixer: {},
    "postcss-modules": {
      getJSON: () => {},
      generateScopedName: "[folder]__[local]__[hash]",
    },
  },
};
