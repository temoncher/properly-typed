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
    'unicorn/no-null': 0,
    'unicorn/no-fn-reference-in-iterator': 0,
    'max-len': [
      2,
      {
        code: 100,
        comments: 180,
      },
    ],
  },
};
