// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  "parserOptions": {
    "ecmaVersion": 8,
    "sourceType": "module",
    "parser": "babel-eslint"
  },
  env: {
    es6: true,
    browser: true,
  },
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  "extends": ["vue", "standard", "plugin:vue/recommended"],
  // required to lint *.vue files
  "plugins": ["import", "vue", "html"],
  // add your custom rules here
  'rules': {
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'eol-last': 0,
    'space-before-function-paren': 0,
    "indent": ["off", 2],
    "vue/max-attributes-per-line": "off",
    "vue/attributes-order":"off",
    "object-curly-spacing":"off",
    "vue/order-in-components":"off",
    "vue/require-v-for-key":"off",
    "vue/attribute-hyphenation":"off",
    "vue/mustache-interpolation-spacing":"off",
    "prefer-const":"off",
    "vue/html-self-closing":"off",
    'linebreak-style': [0, 'error', 'windows'],
    'vue/name-property-casing':'off',
    'comma-dangle':'off',
    'no-multiple-empty-lines':'off',
    'prefer-promise-reject-errors':'off',
    'vue/require-valid-default-prop':'off',
    'no-unused-vars':'off'
  }
}
