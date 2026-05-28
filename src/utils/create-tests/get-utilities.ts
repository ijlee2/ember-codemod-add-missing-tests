import { AST } from '@codemod-utils/ast-javascript';
import { camelize, pascalize } from '@codemod-utils/ember';

import type { EntityName } from '../../types/index.js';

type Data = {
  entityName: EntityName;
};

type Utilities = {
  default: string[];
  named: string[];
};

export function getUtilities(file: string, data: Data): Utilities | undefined {
  const utilities: Utilities = {
    default: [],
    named: [],
  };

  AST.traverse(file, {
    visitExportDefaultDeclaration(path) {
      const { declaration } = path.node;

      if (!declaration) {
        return false;
      }

      switch (declaration.type) {
        case 'ClassDeclaration': {
          utilities.default.push(
            (declaration.id?.name as string | undefined) ??
              pascalize(data.entityName),
          );
          break;
        }

        case 'FunctionDeclaration': {
          utilities.default.push(
            (declaration.id?.name as string | undefined) ??
              camelize(data.entityName),
          );
          break;
        }

        case 'Identifier': {
          utilities.default.push(declaration.name);
          break;
        }

        case 'ObjectExpression': {
          utilities.default.push(camelize(data.entityName));
          break;
        }

        case 'TSDeclareFunction':
        case 'TSInterfaceDeclaration':
        case 'TSTypeAliasDeclaration': {
          break;
        }

        default: {
          console.error(`ERROR: Unknown type: ${declaration.type}`);
          console.log(file);
          console.log();
        }
      }

      return false;
    },

    visitExportNamedDeclaration(path) {
      const { declaration, specifiers } = path.node;

      specifiers!.forEach((specifier) => {
        utilities.named.push(specifier.exported.name as string);
      });

      if (!declaration) {
        return false;
      }

      switch (declaration.type) {
        case 'ClassDeclaration': {
          utilities.named.push(
            (declaration.id?.name as string | undefined) ??
              pascalize(data.entityName),
          );
          break;
        }

        case 'FunctionDeclaration': {
          utilities.named.push(
            (declaration.id?.name as string | undefined) ??
              camelize(data.entityName),
          );
          break;
        }

        case 'TSDeclareFunction':
        case 'TSInterfaceDeclaration':
        case 'TSTypeAliasDeclaration': {
          break;
        }

        case 'VariableDeclaration': {
          declaration.declarations.forEach((declaration) => {
            if (declaration.type !== 'VariableDeclarator') {
              return;
            }

            switch (declaration.id.type) {
              case 'Identifier': {
                utilities.named.push(declaration.id.name);
                return;
              }

              case 'ObjectPattern': {
                declaration.id.properties.forEach((property) => {
                  // @ts-expect-error: Incorrect type
                  utilities.named.push(property.value as string);
                });
                return;
              }

              default: {
                console.log(`ERROR: Unknown ID type: ${declaration.id.type}`);
                console.log(file);
                console.log();
              }
            }
          });

          break;
        }

        default: {
          console.error(`ERROR: Unknown type: ${declaration.type}`);
          console.log(file);
          console.log();
        }
      }

      return false;
    },
  });

  if (utilities.default.length === 0 && utilities.named.length === 0) {
    return undefined;
  }

  utilities.named.sort((a, b) => a.localeCompare(b));

  return utilities;
}
