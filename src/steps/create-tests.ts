import { readFileSync } from 'node:fs';
import { join } from 'node:path';

import { processTemplate } from '@codemod-utils/blueprints';
import { camelize, doubleColonize, pascalize } from '@codemod-utils/ember';
import { createFiles } from '@codemod-utils/files';

import type { AllEntities, Options } from '../types/index.js';
import { blueprintsRoot } from '../utils/blueprints.js';
import { getFileExtension, getUtilities } from '../utils/create-tests/index.js';
import { ENTITY_TEST_FOLDERS, ENTITY_TYPES } from '../utils/ember.js';

export function createTests(allEntities: AllEntities, options: Options): void {
  const { projectHasTemplateTag, projectRoot, testApp } = options;

  ENTITY_TYPES.forEach((entityType) => {
    const entityFolder = ENTITY_TEST_FOLDERS[entityType];

    const fileMap = new Map<string, string>();

    for (const [entityName, entityData] of allEntities[entityType]) {
      const { filePath, isTypeScript, packageName } = entityData;

      const fileExtension = getFileExtension({
        entityType,
        isTypeScript,
        projectHasTemplateTag,
      });

      const blueprintFilePath = join(
        blueprintsRoot,
        entityType,
        `__fileName__${fileExtension}`,
      );

      const blueprintFile = readFileSync(blueprintFilePath, 'utf8');

      let utilities;

      if (entityType === 'utilities') {
        const file = readFileSync(join(projectRoot, filePath), 'utf8');

        utilities = getUtilities(file, {
          entityName,
          isTypeScript,
        });

        if (utilities === undefined) {
          continue;
        }
      }

      const testFilePath = join(
        'tests',
        entityFolder,
        `${entityName}-test${fileExtension}`,
      );

      const testFile = processTemplate(blueprintFile, {
        data: {
          entity: {
            camelizedName: camelize(entityName),
            doubleColonizedName: doubleColonize(entityName),
            name: entityName,
            pascalizedName: pascalize(entityName),
          },
          packageName,
          testAppName: testApp?.name ?? packageName,
          utilities,
        },
      });

      fileMap.set(testFilePath, testFile);
    }

    createFiles(fileMap, {
      projectRoot: testApp?.location ?? projectRoot,
    });
  });
}
