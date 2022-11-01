module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: ['eslint:recommended', 'plugin:react/recommended', 'prettier'],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 7,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      generators: true,
      impliedStrict: true,
      experimentalObjectRestSpread: true
    }
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {}
}
