module.exports = {
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  // Static dictionaries are generated data, not application logic.
  ignorePatterns: ['src/data/**'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  rules: {
    // Props are plain JS here; PropTypes would only add runtime overhead.
    'react/prop-types': 'off',
    'react-refresh/only-export-components': 'warn',
  },
};
