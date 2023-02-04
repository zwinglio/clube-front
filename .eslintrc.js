module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ["plugin:vue/vue3-essential", "airbnb-base", "@nuxtjs"],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module"
  },
  plugins: ["vue"],
  rules: {
    quotes: ["error", "double"],
    'vue/html-self-closing': "off"
  }
}
