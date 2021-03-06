'use strict';

const path = require('path');
const fs = require('fs');

function checkVersion(packagePostfix, file) {
  const local = path.join(__dirname, `node_modules/eslint-config-${packagePostfix}/${file}.js`);
  if (fs.existsSync(local)) {
    return local;
  }
  return packagePostfix;
}

module.exports = {
  "extends": [
    checkVersion('airbnb-base', 'index.js'),
    checkVersion('meetic', 'configurations/es6.js'),
  ],
  "rules": {
    "prefer-const": 1,
    "no-multi-spaces": [
      2,
      {
        "exceptions": {
          "VariableDeclarator": true,
          "ImportDeclaration": true
        }
      }
    ],
    "key-spacing": [
      1,
      {
        "align": "value",
        "mode": "minimum"
      }
    ],
    "strict": [
      2,
      "safe"
    ],
    "no-param-reassign": [
      1,
      {
        "props": false
      }
    ],
    "prefer-arrow-callback": [
      1,
      {
        "allowNamedFunctions": true
      }
    ],
    "no-case-declarations": 2,
    "no-empty-function": [
      1,
      {
        "allow": [
          "arrowFunctions"
        ]
      }
    ],
    "no-empty-pattern": 2,
    "no-extra-label": 2,
    "no-fallthrough": 1,
    "no-labels": [
      2,
      {
        "allowLoop": false,
        "allowSwitch": false
      }
    ],
    "no-magic-numbers": [
      1,
      {
        "ignore": [
          -1,
          0,
          1,
          2,
          1000
        ],
        "ignoreArrayIndexes": true,
        "enforceConst": true,
        "detectObjects": false
      }
    ],
    "no-return-assign": [
      2,
      "except-parens"
    ],
    "no-warning-comments": [
      1,
      {
        "terms": [
          "todo",
          "fixme",
          "xxx",
          "huy",
          "pizda",
          "jopa",
          "хуй",
          "говно"
        ],
        "location": "start"
      }
    ],
    "no-unmodified-loop-condition": 1,
    "no-useless-call": 1,
    "no-cond-assign": [
      2,
      "except-parens"
    ],
    "valid-jsdoc": [
      2,
      {
        "prefer": {
          "returns": "return"
        },
        "preferType": {
          "string": "String",
          "object": "Object",
          "number": "Number"
        },
        "requireReturn": false,
        "requireParamDescription": false,
        "requireReturnDescription": false
      }
    ],
    "no-bitwise": 1,
    "no-plusplus": 0,
    "arrow-parens": [
      2,
      "always"
    ],
    "no-sync": 1,
    "indent": [
      2,
      2,
      {
        "SwitchCase": 1,
        "VariableDeclarator": 1
      }
    ],
    "max-len": [
      2,
      120,
      2,
      {
        "ignoreUrls": true,
        "ignoreComments": false
      }
    ],
    "max-nested-callbacks": [
      1,
      5
    ],
    "newline-per-chained-call": [
      1,
      {
        "ignoreChainWithDepth": 3
      }
    ],
    "no-continue": 0,
    "no-underscore-dangle": [
      1,
      {
        "allowAfterThis": true
      }
    ],
    "one-var": 1,
    "operator-linebreak": [
      1,
      "before"
    ],
    "padded-blocks": 1,
    "quotes": [
      2,
      "single",
      "avoid-escape"
    ],
    "no-shadow": 1,
    "prefer-spread": 1,
    "no-unsafe-finally": 1,
    "no-useless-computed-key": 2,
    "no-unused-expressions": [
      2,
      {
        "allowShortCircuit": true,
        "allowTernary": true
      }
    ],
    "no-use-before-define": [
      2,
      {
        "functions": false,
        "classes": false
      }
    ],
    "no-extra-parens": 0 // temporary
  },
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": false
    },
    "sourceType": "script"
  },
  "env": {
    "node": true,
    "es6": true
  }
};
