module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  plugins: [
    '@typescript-eslint',
  ],
  rules: {
    'vue/multi-word-component-names': 'off'
  }
}
