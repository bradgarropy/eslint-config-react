module.exports = {
    env: {
        browser: true,
        es6: true,
        jest: true,
        node: true,
    },
    extends: [
        "plugin:react/recommended",
        "plugin:jsx-a11y/recommended",
        "./rules/react.js",
        "./rules/react-hooks.js",
        "./rules/jsx-a11y.js",
    ],
    overrides: [],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        sourceType: "module",
    },
    plugins: ["jsx-a11y", "react", "react-hooks"],
    parser: "@babel/eslint-parser",
    rules: {},
    settings: {
        react: {
            version: "detect",
        },
    },
}
