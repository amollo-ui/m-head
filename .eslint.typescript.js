module.exports = {
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "project": "./tsconfig.json",
        "tsconfigRootDir": __dirname,
        "createDefaultProgram": true,
    },
    "extends": ["plugin:@typescript-eslint/eslint-recommended", "plugin:@typescript-eslint/recommended"],
    "plugins": ["@typescript-eslint"],
    "rules": {
        "strict": 0,
        "camelcase": "warn",
        "brace-style": "off",
        "no-shadow": "off",
        "no-extra-semi": "off",
        "no-unused-vars": "off",
        "no-extra-parens": "off",
        "@typescript-eslint/no-shadow": ["warn"],
        "@typescript-eslint/no-var-requires": "warn",
        "@typescript-eslint/brace-style": ["warn", "1tbs"],
        "@typescript-eslint/no-extra-semi": ["warn"],
        "@typescript-eslint/ban-types": [
            "warn",
            {
                "types": {
                    "String": {
                        "message": "use string instead",
                        "fixWith": "string",
                    },
                }
            }
        ],
        "@typescript-eslint/no-empty-interface": "off",
        "@typescript-eslint/no-non-null-assertion": "warn",
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "@typescript-eslint/no-extraneous-class": "warn",
        "@typescript-eslint/ban-ts-comment": "warn",
        "@typescript-eslint/explicit-member-accessibility": "off",
        "@typescript-eslint/no-empty-function": "off",
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/no-misused-promises": "off",
        "@typescript-eslint/no-unused-vars": "warn",
        "@typescript-eslint/no-useless-constructor": "warn",
        "@typescript-eslint/no-require-imports": "warn",
        "@typescript-eslint/prefer-includes": "off",
        "@typescript-eslint/prefer-interface": "off",
        "@typescript-eslint/prefer-function-type": "warn",
        "@typescript-eslint/prefer-string-starts-ends-with": "off",
        "@typescript-eslint/no-use-before-define": "off",
        "@typescript-eslint/promise-function-async": "off",
        "@typescript-eslint/restrict-plus-operands": "off",
        "@typescript-eslint/strict-boolean-expressions": "off",
        "@typescript-eslint/triple-slash-reference": ["off", { 
            "path": "always",
            "types": "always",
            "lib": "always"
        }],
        "@typescript-eslint/explicit-function-return-type": [
            "off",
            {
                "allowExpressions": false,
                "allowHigherOrderFunctions": true,
                "allowTypedFunctionExpressions": true,
                "allowConciseArrowFunctionExpressionsStartingWithVoid": true,
            },
        ],
        "@typescript-eslint/no-inferrable-types": [
            "warn",
            {
                "ignoreParameters": true,
            },
        ],
        "@typescript-eslint/no-this-alias": [
            "warn",
            {
                "allowDestructuring": true,
                "allowedNames": ["that"],
            },
        ],
    },
};