const MODULE_RESOLVER = [
  "module-resolver",
  {
    root: ["./"],
    alias: {
      tailwind: "./tailwind.js",
      "@types": "./types.ts",
    },
  },
];

module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: ["react-native-reanimated/plugin", MODULE_RESOLVER],
    env: {
      production: {
        plugins: [MODULE_RESOLVER],
      },
    },
  };
};
