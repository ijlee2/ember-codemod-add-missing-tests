import {
  getPackageType,
  readPackageJson,
  validatePackageJson,
} from '@codemod-utils/package-json';

import type { AllEntities, Options, PackageType } from '../types/index.js';
import {
  analyzeEmberPackage,
  filterEntities,
} from '../utils/find-entities-without-test/index.js';

export function findEntitiesWithoutTest(
  options: Options,
): AllEntities | undefined {
  const { componentStructure, projectRoot } = options;

  const packageJson = readPackageJson({ projectRoot });
  validatePackageJson(packageJson);

  const packageName = packageJson['name'];
  const packageType = getPackageType(packageJson) as PackageType;

  let entities = analyzeEmberPackage({
    componentStructure,
    packageName,
    packageRoot: projectRoot,
    packageType,
  });

  entities = filterEntities(entities, {
    packageRoot: projectRoot,
  });

  return entities;
}
