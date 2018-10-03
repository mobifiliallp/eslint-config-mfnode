# eslint-config-mfnode

This package provides Mobifilia's .eslintrc as an extensible shared config, for nodejs applications.

## Usage

1. Install the package as a development dependency:

  ```sh
  npm install --save-dev https://github.com/mobifiliallp/eslint-config-mfnode.git#semver:^1.0.0
  ```

2. Install the correct versions of the dependencies, listed below:

  ```sh
  npm install --save-dev eslint@^4.19.1 eslint-config-airbnb-base@^13.1.0 eslint-plugin-import@^2.14.0
  ```

3. Add `"extends": "eslint-config-mfnode"` to your .eslintrc or to the `"eslintConfig"` section of your package.json

