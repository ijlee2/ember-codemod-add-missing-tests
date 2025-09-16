export const ENTITY_SOURCE_FOLDERS = {
  adapters: 'adapters',
  components: 'components',
  controllers: 'controllers',
  helpers: 'helpers',
  models: 'models',
  modifiers: 'modifiers',
  routes: 'routes',
  serializers: 'serializers',
  services: 'services',
  utilities: 'utils',
} as const;

export const ENTITY_TEST_FOLDERS = {
  adapters: 'unit/adapters',
  components: 'integration/components',
  controllers: 'unit/controllers',
  helpers: 'integration/helpers',
  models: 'unit/models',
  modifiers: 'integration/modifiers',
  routes: 'unit/routes',
  serializers: 'unit/serializers',
  services: 'unit/services',
  utilities: 'unit/utils',
} as const;

export const ENTITY_TYPES = [
  'adapters',
  'components',
  'controllers',
  'helpers',
  'models',
  'modifiers',
  'routes',
  'serializers',
  'services',
  'utilities',
] as const;

export const SOURCE_FOR_INTERNAL_PACKAGES = {
  'v1-addon': 'addon',
  'v1-app': 'app',
  'v2-addon': 'src',
  'v2-app': 'app',
} as const;
