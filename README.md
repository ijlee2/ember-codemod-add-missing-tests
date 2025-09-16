[![This project uses GitHub Actions for continuous integration.](https://github.com/ijlee2/ember-codemod-add-missing-tests/actions/workflows/ci.yml/badge.svg)](https://github.com/ijlee2/ember-codemod-add-missing-tests/actions/workflows/ci.yml)

# ember-codemod-add-missing-tests

_Codemod to add missing tests_


## Why use it?

Large projects without tests are hard to maintain and extend. Run this codemod to find untested code and create default tests.

The codemod:

- Supports 10 entities in Ember and Ember Data
- Accounts for TypeScript, `<template>` tag, and route splitting
- Blazingly fast compared to Ember CLI


## Usage

Step 1. Quickly migrate.

```sh
cd <path/to/your/project>
npx ember-codemod-add-missing-tests <arguments>
```

Step 2. Review the package.

- [x] Fix format and lint errors.
- [x] Run the new integration and unit tests. Update assertions or skip tests as needed.


### Arguments

<details>

<summary>Optional: Specify the component structure</summary>

By default, an Octane project has the flat component structure. Pass `--component-structure` to indicate otherwise.

```sh
npx ember-codemod-add-missing-tests --component-structure nested
```

</details>

<details>

<summary>Optional: Specify the project root</summary>

Pass `--root` to run the codemod somewhere else (i.e. not in the current directory).

```sh
npx ember-codemod-add-missing-tests --root <path/to/your/project>
```

</details>

<details>

<summary>Optional: Specify the test-app location</summary>

By default, the codemod creates tests in the package where it is run. Pass `--test-app-location` to override the logic.

```sh
npx ember-codemod-add-missing-tests --test-app-location ../../tests/my-v2-addon
```

</details>


### Limitations

The codemod is designed to cover typical cases. It is not designed to cover one-off cases.

To better meet your needs, consider cloning the repo and running the codemod locally.

```sh
cd <path/to/cloned/repo>

# Compile TypeScript
pnpm build

# Run codemod
./dist/bin/ember-codemod-add-missing-tests.js --root <path/to/your/project>
```


## Compatibility

- Node.js v20 or above


## Contributing

See the [Contributing](CONTRIBUTING.md) guide for details.


## License

This project is licensed under the [MIT License](LICENSE.md).
