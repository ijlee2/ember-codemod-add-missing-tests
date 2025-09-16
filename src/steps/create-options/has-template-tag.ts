import {
  convertToMap,
  type PackageJson,
  readPackageJson,
} from '@codemod-utils/package-json';

import type { PackageName } from '../../types/index.js';
import {
  isEmberSourceRecent,
  type PackageVersion,
} from '../../utils/create-options/index.js';

function analyzeDependencies(packageJson: PackageJson): {
  hasEmberTemplateImports: boolean;
  isEmberSourceRecent: boolean;
} {
  const dependencies = convertToMap(
    Object.assign(
      {},
      packageJson['dependencies'],
      packageJson['devDependencies'],
    ),
  ) as Map<PackageName, PackageVersion>;

  return {
    hasEmberTemplateImports: dependencies.has('ember-template-imports'),
    isEmberSourceRecent: isEmberSourceRecent(dependencies.get('ember-source')),
  };
}

export function hasTemplateTag(projectRoot: string): boolean {
  const packageJson = readPackageJson({ projectRoot });

  const { hasEmberTemplateImports, isEmberSourceRecent } =
    analyzeDependencies(packageJson);

  return hasEmberTemplateImports || isEmberSourceRecent;
}
