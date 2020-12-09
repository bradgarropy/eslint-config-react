module.exports = {
    env: {
        browser: true,
        es6: true,
        jest: true,
        node: true,
    },
    extends: [
        "@bradgarropy/eslint-config",
        "plugin:react/recommended",
        "plugin:jsx-a11y/recommended",
        "./rules/react.js",
        "./rules/react-hooks.js",
    ],
    overrides: [],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        sourceType: "module",
    },
    plugins: ["jsx-a11y", "react", "react-hooks"],
    parser: "babel-eslint",
    rules: {},
    settings: {
        react: {
            version: "detect",
        },
    },
}
