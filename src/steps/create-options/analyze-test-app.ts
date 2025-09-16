import { join } from 'node:path';

import {
  readPackageJson,
  validatePackageJson,
} from '@codemod-utils/package-json';

import type { CodemodOptions } from '../../types/index.js';

export function analyzeTestApp(codemodOptions: CodemodOptions):
  | {
      location: string;
      name: string;
    }
  | undefined {
  const { testAppLocation, projectRoot } = codemodOptions;

  if (!testAppLocation) {
    return undefined;
  }

  const packageJson = readPackageJson({
    projectRoot: join(projectRoot, testAppLocation),
  });

  validatePackageJson(packageJson);

  return {
    location: join(projectRoot, testAppLocation),
    name: packageJson['name'],
  };
}
