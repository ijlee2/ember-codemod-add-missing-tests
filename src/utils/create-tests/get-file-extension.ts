import type { EntityType } from '../../types/index.js';

type FileExtension = '.gjs' | '.gts' | '.js' | '.ts';

export function getFileExtension({
  entityType,
  isTypeScript,
  projectHasTemplateTag,
}: {
  entityType: EntityType;
  isTypeScript: boolean;
  projectHasTemplateTag: boolean;
}): FileExtension {
  switch (entityType) {
    case 'components':
    case 'helpers':
    case 'modifiers': {
      if (projectHasTemplateTag) {
        return isTypeScript ? '.gts' : '.gjs';
      }

      return isTypeScript ? '.ts' : '.js';
    }

    default: {
      return isTypeScript ? '.ts' : '.js';
    }
  }
}
