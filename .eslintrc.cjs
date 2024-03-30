module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "jest": true,
        "es6": true,
        "node": true
    },
    "extends": [
        "airbnb",
        "airbnb-typescript",
        "airbnb/hooks",
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:prettier/recommended"
    ],
    "overrides": [
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module",
        "project":"./tsconfig.json"
    },
    "plugins": [
        "react",
        "@typescript-eslint",
        "prettier"
    ],
    "rules": {
        "linebreak-style": ["error", "unix"],
        "quotes": ["error", "single"],
        "semi": ["error", "always"],
        "react/jsx-props-no-spreading": 0,
        "react/jsx-filename-extension": 0,
        "no-param-reassign": 0,
        "react/prop-types": 0,
        "react/require-default-props": 0,
        "react/no-array-index-key": 0,
        "react/react-in-jsx-scope": 0,
        "import/order": 0,
        "no-console": 0,
        "no-shadow": 0,
        "no-nested-ternary": 0,
        "@typescript-eslint/naming-convention": 0,
        "import/no-cycle": 0,
        "no-mixed-spaces-and-tabs": 0,
        "@typescript-eslint/no-unused-vars": [
            1,
            {
                "vars": "all",
                "args": "none"
            }
        ],
        "react/function-component-definition": [
            2,
            {
                namedComponents: "arrow-function",
                unnamedComponents: "arrow-function",
            },
        ],
        "import/prefer-default-export": "off",
        "@typescript-eslint/no-explicit-any": "off"
    },
}
