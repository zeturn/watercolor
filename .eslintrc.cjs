module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2021,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['@typescript-eslint', 'vue'],
  ignorePatterns: [
    'node_modules/**/*',
    'dist/**/*',
    'storybook-static/**/*',
    'storybook-static-react/**/*',
    'storybook-static-vue/**/*',
    'coverage/**/*',
    '*.min.js',
    '*.bundle.js',
    '*.chunk.js',
    'public/**/*',
  ],
  rules: {
    // Vue rules - lower strictness
    'vue/multi-word-component-names': 'off',
    'vue/component-definition-name-casing': 'off',
    'vue/component-name-in-template-casing': 'off',
    'vue/prop-name-casing': 'off',
    'vue/attribute-hyphenation': 'off',
    'vue/max-attributes-per-line': 'off',
    'vue/html-self-closing': 'off',
    'vue/singleline-html-element-content-newline': 'off',
    'vue/attributes-order': 'off',
    'vue/no-v-html': 'off',
    'vue/html-indent': 'off',
    'vue/require-default-prop': 'off',
    'vue/require-valid-default-prop': 'warn',
    'vue/one-component-per-file': 'warn',
    'vue/no-template-shadow': 'warn',
    'vue/no-reserved-component-names': 'warn',
    'vue/valid-v-on': 'warn',
    'vue/order-in-components': 'off',
    
    // TypeScript rules - lower strictness
    '@typescript-eslint/no-unused-vars': 'warn',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-this-alias': 'warn',
    
    // General rules - lower strictness
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'prefer-const': 'warn',
    'no-var': 'warn',
    'no-useless-escape': 'off',
    'no-case-declarations': 'off',
    'no-prototype-builtins': 'off',
    'no-dupe-keys': 'warn',
    'no-empty': 'warn',
    'no-extra-boolean-cast': 'off',
    'no-undef': 'off', // TypeScript will handle this
  },
  overrides: [
    {
      files: ['*.vue'],
      rules: {
        '@typescript-eslint/no-unused-vars': 'off',
      },
    },
    {
      files: ['tests/**/*', '*.test.*', '*.spec.*'],
      env: {
        jest: true,
      },
      plugins: ['vitest'],
      rules: {
        'vitest/expect-expect': 'warn',
        'vitest/no-disabled-tests': 'warn',
        'vitest/no-focused-tests': 'warn',
        'vitest/valid-expect': 'warn',
        '@typescript-eslint/no-unused-vars': 'off',
      },
    },
    {
      // Build artifacts - close most checks
      files: ['dist/**/*', '*.d.ts', 'storybook-static/**/*'],
      rules: {
        '@typescript-eslint/no-unused-vars': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/ban-types': 'off',
        'prefer-const': 'off',
        'no-var': 'off',
        'no-undef': 'off',
      },
    },
    {
      // Configuration files - loosen checks
      files: ['*.config.js', '*.config.ts'],
      rules: {
        '@typescript-eslint/no-unused-vars': 'off',
        '@typescript-eslint/no-var-requires': 'off',
      },
    },
  ],
} 