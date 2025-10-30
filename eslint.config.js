// eslint.config.js
export default [
    {
      files: ["**/*.js", "**/*.ts", "**/*.tsx"],
      languageOptions: {
        ecmaVersion: "latest",
        sourceType: "module"
      },
      rules: {
        semi: ["error", "always"],
        quotes: ["error", "double"]
      }
    }
  ];
  