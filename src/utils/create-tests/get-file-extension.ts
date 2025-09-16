import type { EntityType } from '../../types/index.js';

type FileExtension = '.gjs' | '.gts' | '.js' | '.ts';

export function getFileExtension({
  entityType,
  isTemplateTag,
  isTypeScript,
}: {
  entityType: EntityType;
  isTemplateTag: boolean;
  isTypeScript: boolean;
}): FileExtension {
  switch (entityType) {
    case 'components':
    case 'helpers':
    case 'modifiers': {
      if (isTemplateTag) {
        return isTypeScript ? '.gts' : '.gjs';
      }

      return isTypeScript ? '.ts' : '.js';
    }

    default: {
      return isTypeScript ? '.ts' : '.js';
    }
  }
}
