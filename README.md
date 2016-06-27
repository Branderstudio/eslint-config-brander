# eslint-config-brander

## Install
```bash
npm install --save-dev eslint eslint-config-brander eslint-plugin-import eslint-import-resolver-node
```

## Config example
In **.eslintrc** file in you project put this:
```json
{
  "extends": [
    "brander"
  ],
  "rules": {
    // overrides
  },
  "parserOptions": {
  /*
    "ecmaFeatures": {
      "jsx": false
    },
    "sourceType": "script"
    */
  },
  "env": {
  /*
    "node": true,
    "es6": true
    */
  }
}
```
