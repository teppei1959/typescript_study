module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: [
        "eslint:recommended",
        "plugin:prettier/recommended",
        "prettier",
    ],
    plugins: ["@typescript-eslint"],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        sourceType: "module",
        project: "./tsconfig.json",
        ecmaVersion: "latest",
    },
    root:true,
    rules: {
        camelcase: ["error", { properties: "never" }],
    }
}