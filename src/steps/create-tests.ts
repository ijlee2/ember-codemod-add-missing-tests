import { createFiles } from '@codemod-utils/files';

import type { AllEntities, Options } from '../types/index.js';
import { ENTITY_TEST_FOLDERS, ENTITY_TYPES } from '../utils/ember.js';

export function createTests(allEntities: AllEntities, options: Options): void {
  const { projectRoot } = options;

  ENTITY_TYPES.forEach((entityType) => {
    const entityFolder = ENTITY_TEST_FOLDERS[entityType];

    const fileMap = new Map<string, string>();

    for (const [, entityData] of allEntities[entityType]) {
      // ...
    }

    createFiles(fileMap, {
      projectRoot,
    });
  });
}
