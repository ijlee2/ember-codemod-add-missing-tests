import type { CodemodOptions, Options } from '../../../src/types/index.js';

const codemodOptions: CodemodOptions = {
  componentStructure: 'flat',
  projectRoot: 'tmp/my-v1-app-typescript',
  testAppLocation: undefined,
};

const options: Options = {
  componentStructure: 'flat',
  projectHasTemplateTag: true,
  projectRoot: 'tmp/my-v1-app-typescript',
  testApp: undefined,
};

export { codemodOptions, options };
