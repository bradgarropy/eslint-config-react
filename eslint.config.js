import globals from "globals"
import reactHooks from "eslint-plugin-react-hooks"
import react from "eslint-plugin-react"
import jsxA11y from "eslint-plugin-jsx-a11y"
import tseslint from "typescript-eslint"

const config = [
    {
        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.node,
                ...globals.jest,
                ...globals.es2021,
            },
            parser: tseslint.parser,
            parserOptions: {
                ecmaFeatures: {
                    jsx: true,
                },
                project: "./tsconfig.json",
                requireConfigFile: false,
            },
            sourceType: "module",
        },
    },
    {
        plugins: {
            "react": react,
            "react-hooks": reactHooks,
        },
    },
    react.configs.flat.recommended,
    jsxA11y.flatConfigs.recommended,
    {
        rules: {
            ...reactHooks.configs.recommended.rules,
            "react/jsx-tag-spacing": [
                "error",
                {
                    beforeSelfClosing: "always",
                },
            ],
            "react/react-in-jsx-scope": ["off"],
            "react-hooks/rules-of-hooks": ["error"],
            "react-hooks/exhaustive-deps": ["error"],
            "jsx-a11y/accessible-emoji": ["off"],
        },
        settings: {
            react: {
                version: "detect",
            },
        },
    },
]

export default config
