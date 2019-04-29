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
      /* .Pin down those warning when using { console.log() } related function. See:
       * https://stackoverflow.com/questions/34215526/eslint-how-to-disable-unexpected-console-statement-in-node-js#34215651. */
      'vue/html-indent': 'off',
      /* .It is bad idea to not to follow corrrect indentation, but sometimes is is necessary to use "incorrect" indentation
       * for example when you embed svg code inside html document, those svg are not organized by svg editor, and you don't
       * want to waste time to make it indent beautifully. */
      'vue/html-self-closing': 'off',
      /* .In Vue.js template, we can use either two styles for elements which don't have their content:
       * ..<YourComponent></YourComponent>
       * ..<YourComponent/> (self-closing). */
      'vue/max-attributes-per-line': 'off',
      /* .If not set to off, any html element ,, attributes, have some special rules about how much attributes
       * you can put in same line (in this html element opening tag). */
      'vue/html-closing-bracket-newline': 'off',
      /* .If not set to off, you can't write html element opening tag like this - <div
       * ></div>, since the closing bracket is break to a new line. */

      'vue/v-on-style': 'off',
      'vue/v-bind-style': 'off',
      'vue/attribute-hyphenation': 'off',
      'vue/name-property-casing': 'off',
      // .see: https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/name-property-casing.md.
      'vue/order-in-components': 'off',
      /* .See: https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/order-in-components.md.
       * .See the options section:
       * https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/order-in-components.md#wrench-options
       * about how the [ defult ]-[ suggested ] order is. */
      'vue/singleline-html-element-content-newline': 'off',
      // .See: https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/singleline-html-element-content-newline.md.
      'vue/multiline-html-element-content-newline': 'off',
      'vue/require-prop-types': 'off',
      // .See: https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/require-prop-types.md.
  },
};
