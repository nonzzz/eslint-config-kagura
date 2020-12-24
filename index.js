const rules = require('./rules')

module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      legacyDecorators: true,
    },
  },

  env: {
    node: true,
    browser: true,
    es6: true,
    amd: false,
  },

  globals: {
    require: true,
    Promise: true,
    process: true,
  },

  rules: rules,
}
