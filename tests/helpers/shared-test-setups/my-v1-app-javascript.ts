import type { CodemodOptions, Options } from '../../../src/types/index.js';

const codemodOptions: CodemodOptions = {
  componentStructure: 'flat',
  projectRoot: 'tmp/my-v1-app-javascript',
  testAppLocation: undefined,
};

const options: Options = {
  componentStructure: 'flat',
  projectHasTemplateTag: true,
  projectRoot: 'tmp/my-v1-app-javascript',
  testApp: undefined,
};

export { codemodOptions, options };
