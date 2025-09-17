import type { PackageType as _PackageType } from '@codemod-utils/package-json';

import type { ENTITY_TYPES } from '../utils/ember.js';

type CodemodOptions = {
  componentStructure: 'flat' | 'nested';
  projectRoot: string;
  testAppLocation: string | undefined;
};

type Options = {
  componentStructure: 'flat' | 'nested';
  projectHasTemplateTag: boolean;
  projectRoot: string;
  testApp:
    | {
        location: string;
        name: string;
      }
    | undefined;
};

type AllEntities = Record<EntityType, Entities>;

type Entities = Map<EntityName, EntityData>;

type EntityData = {
  filePath: string;
  isTypeScript: boolean;
  packageName: PackageName;
};

type EntityName = string;

type EntityType = (typeof ENTITY_TYPES)[number];

type PackageName = string;

type PackageType = Exclude<_PackageType, 'node'>;

export type {
  AllEntities,
  CodemodOptions,
  Entities,
  EntityData,
  EntityName,
  EntityType,
  Options,
  PackageName,
  PackageType,
};
