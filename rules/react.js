module.exports = {
    rules: {
        "react/jsx-tag-spacing": [
            "error",
            {
                beforeSelfClosing: "always",
            },
        ],
        "react/react-in-jsx-scope": ["off"],
    },
    overrides: [
        {
            files: ["*.tsx"],
            rules: {
                "react/prop-types": ["off"],
            },
        },
    ],
}
