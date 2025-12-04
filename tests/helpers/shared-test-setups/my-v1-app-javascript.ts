import { normalize } from 'node:path';

import type { CodemodOptions, Options } from '../../../src/types/index.js';

const codemodOptions: CodemodOptions = {
  componentStructure: 'flat',
  projectRoot: normalize('tmp/my-v1-app-javascript'),
  testAppLocation: undefined,
};

const options: Options = {
  componentStructure: 'flat',
  projectHasTemplateTag: true,
  projectRoot: normalize('tmp/my-v1-app-javascript'),
  testApp: undefined,
};

export { codemodOptions, options };
