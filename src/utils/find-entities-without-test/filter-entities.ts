import { join } from 'node:path';

import { findFiles } from '@codemod-utils/files';

import type { AllEntities, Entities } from '../../types/index.js';
import { ENTITY_TEST_FOLDERS, ENTITY_TYPES } from '../ember.js';

type Data = {
  packageRoot: string;
};

export function filterEntities(
  allEntities: AllEntities,
  data: Data,
): AllEntities {
  const { packageRoot } = data;

  ENTITY_TYPES.forEach((entityType) => {
    const entityFolder = ENTITY_TEST_FOLDERS[entityType];

    const testFilePaths = new Set(
      findFiles(`tests/${entityFolder}/**/*-test.{gjs,gts,js,ts}`, {
        ignoreList: ['**/*.d.ts'],
        projectRoot: packageRoot,
      }),
    );

    const entitiesFiltered: Entities = new Map();

    for (const [entityName, entityData] of allEntities[entityType]) {
      const testFilePath = join('tests', entityFolder, `${entityName}-test`);

      const hasTest =
        testFilePaths.has(`${testFilePath}.gjs`) ||
        testFilePaths.has(`${testFilePath}.gts`) ||
        testFilePaths.has(`${testFilePath}.js`) ||
        testFilePaths.has(`${testFilePath}.ts`);

      if (hasTest) {
        continue;
      }

      entitiesFiltered.set(entityName, entityData);
    }

    allEntities[entityType] = entitiesFiltered;
  });

  return allEntities;
}
