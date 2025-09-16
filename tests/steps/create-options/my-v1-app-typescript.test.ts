import { assert, loadFixture, test } from '@codemod-utils/tests';

import { createOptions } from '../../../src/steps/index.js';
import {
  codemodOptions,
  options,
} from '../../helpers/shared-test-setups/my-v1-app-typescript.js';

test('steps | create-options > my-v1-app-typescript', function () {
  const inputProject = {
    'package.json': JSON.stringify({
      name: 'my-v1-app',
      version: '0.0.0',
      devDependencies: {
        'ember-source': '~6.4.0',
      },
    }),
  };

  loadFixture(inputProject, codemodOptions);

  assert.deepStrictEqual(createOptions(codemodOptions), options);
});
