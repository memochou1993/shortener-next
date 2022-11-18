module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true,
  },
  extends: [
    'next/core-web-vitals',
    'airbnb',
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    'react/prop-types': 'off',
    'react/jsx-props-no-spreading': 'off',
  },
};
