module.exports = {
    "preset": "ts-jest",
    "testEnvironment": "jsdom",
    "roots": ["<rootDir>/lib"],
    "globals": {
        "ts-jest": {
            "tsconfig": "tsconfig.json"
        }
    },
    "transform": {
        "^.+\\.tsx?$": "ts-jest",
    },
    "setupFilesAfterEnv": [
        "@testing-library/jest-dom/extend-expect"
    ],
    "testRegex": "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
    "moduleFileExtensions": ["ts", "tsx", "js", "jsx", "json", "node"]
};