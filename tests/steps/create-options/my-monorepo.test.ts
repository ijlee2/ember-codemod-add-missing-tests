import { assert, loadFixture, test } from '@codemod-utils/tests';

import { createOptions } from '../../../src/steps/index.js';
import {
  codemodOptions,
  options,
} from '../../helpers/shared-test-setups/my-monorepo.js';

test('steps | create-options > my-monorepo', function () {
  const inputProject = {
    'package.json': JSON.stringify({
      name: 'my-v2-addon',
      version: '0.0.0',
      keywords: ['ember-addon'],
      devDependencies: {
        'ember-source': '~6.4.0',
      },
      'ember-addon': {
        type: 'addon',
        version: 2,
      },
    }),
    tests: {
      'my-v2-addon': {
        'package.json': JSON.stringify({
          name: 'test-app',
          version: '0.0.0',
          devDependencies: {
            'ember-source': '~5.12.0',
          },
        }),
      },
    },
  };

  loadFixture(inputProject, codemodOptions);

  assert.deepStrictEqual(createOptions(codemodOptions), options);
});
