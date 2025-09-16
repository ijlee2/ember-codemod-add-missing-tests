import type { CodemodOptions, Options } from '../../../src/types/index.js';

const codemodOptions: CodemodOptions = {
  componentStructure: 'flat',
  projectRoot: 'tmp/my-monorepo',
  testAppLocation: 'tests/my-v2-addon',
};

const options: Options = {
  componentStructure: 'flat',
  projectHasTemplateTag: true,
  projectRoot: 'tmp/my-monorepo',
  testApp: {
    location: 'tmp/my-monorepo/tests/my-v2-addon',
    name: 'test-app',
  },
};

export { codemodOptions, options };
