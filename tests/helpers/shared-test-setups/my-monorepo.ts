import { normalizeFilePath } from '@codemod-utils/files';

import type { CodemodOptions, Options } from '../../../src/types/index.js';

const codemodOptions: CodemodOptions = {
  componentStructure: 'flat',
  projectRoot: normalizeFilePath('tmp/my-monorepo'),
  testAppLocation: normalizeFilePath('tests/my-v2-addon'),
};

const options: Options = {
  componentStructure: 'flat',
  projectHasTemplateTag: true,
  projectRoot: normalizeFilePath('tmp/my-monorepo'),
  testApp: {
    location: normalizeFilePath('tmp/my-monorepo/tests/my-v2-addon'),
    name: 'test-app',
  },
};

export { codemodOptions, options };
