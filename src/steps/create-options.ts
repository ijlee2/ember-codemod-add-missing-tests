import type { CodemodOptions, Options } from '../types/index.js';
import { hasTemplateTag } from './create-options/index.js';

export function createOptions(codemodOptions: CodemodOptions): Options {
  const { componentStructure, projectRoot } = codemodOptions;

  return {
    componentStructure,
    projectHasTemplateTag: hasTemplateTag(projectRoot),
    projectRoot,
  };
}
