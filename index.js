module.exports = {
  "extends": [
    "airbnb-base"
  ],
  "rules": {
    "max-len": "off",
    "object-shorthand": "off",
    "prefer-destructuring": "off",
    "no-param-reassign": ["error", {
      "props": false
    }],
    "no-else-return": "off",
    "no-prototype-builtins": "off",
    "no-mixed-operators": [
      "error",
      {
        "allowSamePrecedence": true
      }
    ]
  }
}