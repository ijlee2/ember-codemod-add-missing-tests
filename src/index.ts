import { createOptions, findEntitiesWithoutTest } from './steps/index.js';
import type { CodemodOptions } from './types/index.js';

export function runCodemod(codemodOptions: CodemodOptions): void {
  const options = createOptions(codemodOptions);
  const entities = findEntitiesWithoutTest(options);

  if (!entities) {
    return;
  }

  console.log(entities);
}
