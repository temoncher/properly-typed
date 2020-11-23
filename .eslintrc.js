module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: ['./tsconfig.json'],
  },
  plugins: [
    '@typescript-eslint',
  ],
  extends: [
    'temoncher/base',
    'temoncher/typescript',
  ],
  rules: {
    'unicorn/prefer-string-slice': 0,
  }
};
