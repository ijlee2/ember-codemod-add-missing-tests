#!/usr/bin/env sh

#----------
#
#  A. Purpose
#
#    Fix all test fixtures after updating the source code.
#
#  B. Usage
#
#    ./update-test-fixtures.sh
#
#---------

# Compile TypeScript
pnpm build

# Update fixtures
rm -r "tests/fixtures/my-v1-app-javascript/output"
cp -r "tests/fixtures/my-v1-app-javascript/input" "tests/fixtures/my-v1-app-javascript/output"

./dist/bin/ember-codemod-add-missing-tests.js \
  --root "tests/fixtures/my-v1-app-javascript/output"

# Update fixtures
rm -r "tests/fixtures/my-v1-app-typescript/output"
cp -r "tests/fixtures/my-v1-app-typescript/input" "tests/fixtures/my-v1-app-typescript/output"

./dist/bin/ember-codemod-add-missing-tests.js \
  --root "tests/fixtures/my-v1-app-typescript/output"
