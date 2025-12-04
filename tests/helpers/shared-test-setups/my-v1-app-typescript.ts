import { normalizeFilePath } from '@codemod-utils/files';

import type { CodemodOptions, Options } from '../../../src/types/index.js';

const codemodOptions: CodemodOptions = {
  componentStructure: 'flat',
  projectRoot: normalizeFilePath('tmp/my-v1-app-typescript'),
  testAppLocation: undefined,
};

const options: Options = {
  componentStructure: 'flat',
  projectHasTemplateTag: true,
  projectRoot: normalizeFilePath('tmp/my-v1-app-typescript'),
  testApp: undefined,
};

export { codemodOptions, options };
