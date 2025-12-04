import { normalize } from 'node:path';

import type { CodemodOptions, Options } from '../../../src/types/index.js';

const codemodOptions: CodemodOptions = {
  componentStructure: 'flat',
  projectRoot: normalize('tmp/my-monorepo'),
  testAppLocation: normalize('tests/my-v2-addon'),
};

const options: Options = {
  componentStructure: 'flat',
  projectHasTemplateTag: true,
  projectRoot: normalize('tmp/my-monorepo'),
  testApp: {
    location: normalize('tmp/my-monorepo/tests/my-v2-addon'),
    name: 'test-app',
  },
};

export { codemodOptions, options };
