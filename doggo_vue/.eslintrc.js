// .About config eslint for vue project, see:
// https://eslint.vuejs.org/user-guide/#usage
// https://github.com/vuejs/eslint-plugin-vue/issues/746.

module.exports = {
  extends: [
  // .Add more generic rulesets here, such as - { 'eslint:recommended' }.
    'plugin:vue/recommended',
  ],
  rules: {
  // .Override/add rules settings here, such as - { 'vue/no-unused-vars': 'error' }.
      'no-console': 'off',
      // .Pin down those warning when using { console.log() } related function. See:
      // https://stackoverflow.com/questions/34215526/eslint-how-to-disable-unexpected-console-statement-in-node-js#34215651.

      'vue/v-on-style': 'off',
      'vue/v-bind-style': 'off',
      'vue/attribute-hyphenation': 'off',
      'vue/name-property-casing': 'off',
      // .see: https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/name-property-casing.md.
      'vue/order-in-components': 'off',
      // .See: https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/order-in-components.md.
      // .See the options section:
      // https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/order-in-components.md#wrench-options
      // about how the [ defult ]-[ suggested ] order is.
      'vue/singleline-html-element-content-newline': 'off',
      // .See: https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/singleline-html-element-content-newline.md.
      'vue/multiline-html-element-content-newline': 'off',
      'vue/require-prop-types': 'off',
      // .See: https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/require-prop-types.md.
  },
};
