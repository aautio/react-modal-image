const moduleFormat = process.env.MODULES;

const assert = require("assert");
assert(
  ["commonjs", "es6"].includes(moduleFormat),
  "Undefined module format! Choose either commonjs or es6"
);

module.exports = function(api) {
  api.cache(true);

  const presets = [
    [
      "@babel/preset-env",
      {
        modules: moduleFormat === "es6" ? false : moduleFormat
      }
    ],
    "@babel/preset-react"
  ];
  const plugins = ["@babel/plugin-proposal-class-properties"];

  return {
    presets,
    plugins
  };
};
