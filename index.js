module.exports = {
    parser: "@typescript-eslint/parser",
    extends: [
        'plugin:@typescript-eslint/recommended',
        'prettier',
        'plugin:prettier/recommended',
    ],
    plugins: ["import", "unused-imports"],
    env: {
        commonjs: true,
        es6: true,
        node: true,
        browser: false,
    },
    parserOptions: {
        ecmaVersion: 2024,
        sourceType: "module",
        ecmaFeatures: {
            experimentalObjectRestSpread: true,
            jsx: false,
        },
    },
    globals: {
        strapi: true,
    },
    rules: {
        '@typescript-eslint/no-empty-interface': "error",
        '@typescript-eslint/explicit-module-boundary-types': "off",
        '@typescript-eslint/no-unused-vars': "off",
        '@typescript-eslint/no-var-requires': "off",
        '@typescript-eslint/padding-line-between-statements': [
            'error',
            {
                blankLine: "always",
                prev: ["const", "let", "var", "export", "interface", "type"],
                next: "*",
            },
            {
                blankLine: "any",
                prev: ["const", "let", "var"],
                next: ["const", "let", "var"],
            },
            { blankLine: "always", prev: "*", next: ["interface", "type"] },
        ],
        'import/order': [
            'error',
            {
                'newlines-between': "always",
                alphabetize: { order: "asc", caseInsensitive: true },
                pathGroups: ["@/lib"].map((path) => ({
                    pattern: `${path}/**`,
                    group: "external",
                    position: "after",
                })),
                pathGroupsExcludedImportTypes: ["builtin"],
            },
        ],
        "padding-line-between-statements": "off",
        'prettier/prettier': "error",
        'linebreak-style': ["error", "unix"],
        'no-console': "error",
        'no-unused-vars': [1, { args: "after-used", argsIgnorePattern: "^_" }],
        quotes: ["error", "single"],
        semi: ["error", "never"],
        'unused-imports/no-unused-imports-ts': "error",
        'unused-imports/no-unused-vars-ts': [
            'warn',
            {
                vars: "all",
                varsIgnorePattern: "^_",
                args: "after-used",
                argsIgnorePattern: "^_",
            },
        ],
    },
};
