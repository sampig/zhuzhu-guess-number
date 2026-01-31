import { defineConfig } from "eslint/config";
import react from "eslint-plugin-react";
import reactNative from "eslint-plugin-react-native";
import jsdoc from "eslint-plugin-jsdoc";
import babelParser from "@babel/eslint-parser";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default defineConfig([{
    extends: compat.extends("eslint:recommended", "plugin:react/recommended"),

    plugins: {
        react,
        "react-native": reactNative,
        jsdoc: jsdoc,
    },

    languageOptions: {
        parser: babelParser,
        ecmaVersion: 2020,
        sourceType: "module",
        parserOptions: {
            requireConfigFile: false,
            babelOptions: {
                presets: ["babel-preset-expo"],
            },
            ecmaFeatures: {
                jsx: true,
            },
        },
    },

    settings: {
        react: {
            version: "detect",
        },
    },

    rules: {
        "comma-dangle": ["error", "always-multiline"],

        "comma-spacing": ["error", {
            before: false,
            after: true,
        }],

        "react/prop-types": [0],

        "jsdoc/require-jsdoc": ["error", {
            require: {
                FunctionDeclaration: true,
                MethodDefinition: true,
                ClassDeclaration: true,
                ArrowFunctionExpression: false,
                FunctionExpression: true,
            },
        }],

        "jsdoc/require-returns": "off",

        quotes: ["error", "single", {
            avoidEscape: true,
        }],

        "jsx-quotes": ["error", "prefer-single"],
    },
}, {
    files: ["**/*.test.js"],

    rules: {
        "no-undef": "off",
        "jsdoc/require-jsdoc": "off",
    },
}]);
