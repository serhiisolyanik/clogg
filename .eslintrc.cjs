module.exports = {
  extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  root: true,
  env: {
    browser: true,
    amd: true,
    commonjs: true,
    node: true,
  },
  ignorePatterns: ["src/test/"],
};
