module.exports = {
  parserOptions: {
    parser: '@typescript-eslint/parser',
    project: ['./tsconfig.json'],
  },
  plugins: [
    '@typescript-eslint',
  ],
  extends: [
    'temoncher/typescript',
  ],
  rules: {
    'max-len': [
      2,
      {
        code: 100,
        comments: 180,
      },
    ],
  },
};
