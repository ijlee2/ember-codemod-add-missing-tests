/* eslint-disable @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access */
import { AST } from '@codemod-utils/ast-javascript';
import { camelize, pascalize } from '@codemod-utils/ember';

import type { EntityName } from '../../types/index.js';

type Data = {
  entityName: EntityName;
  isTypeScript: boolean;
};

type Utilities = {
  default: string[];
  named: string[];
};

export function getUtilities(file: string, data: Data): Utilities | undefined {
  const traverse = AST.traverse(data.isTypeScript);

  const utilities: Utilities = {
    default: [],
    named: [],
  };

  traverse(file, {
    visitExportDefaultDeclaration(path) {
      const { declaration } = path.value;

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
          utilities.default.push(declaration.name as string);
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
          throw new Error(`Unknown type: ${declaration.type}`);
        }
      }

      return false;
    },

    visitExportNamedDeclaration(path) {
      const { declaration, specifiers } = path.value;

      // @ts-expect-error: Parameter 'specifier' implicitly has an 'any' type.
      specifiers.forEach((specifier) => {
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
          // @ts-expect-error: Binding element 'id' implicitly has an 'any' type.
          declaration.declarations.forEach(({ id }) => {
            switch (id.type) {
              case 'Identifier': {
                utilities.named.push(id.name as string);
                return;
              }

              case 'ObjectPattern': {
                // @ts-expect-error: Parameter 'property' implicitly has an 'any' type.
                id.properties.forEach((property) => {
                  utilities.named.push(property.value as string);
                });
                return;
              }

              default: {
                console.log(id);
                throw new Error(`Unknown ID type: ${id.type}`);
              }
            }
          });

          break;
        }

        default: {
          throw new Error(`Unknown type: ${declaration.type}`);
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
