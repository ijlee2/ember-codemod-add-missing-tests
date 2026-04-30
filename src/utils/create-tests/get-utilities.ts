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
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const { declaration } = path.value;

      if (!declaration) {
        return false;
      }

      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      switch (declaration.type) {
        case 'ClassDeclaration': {
          utilities.default.push(
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            (declaration.id?.name as string | undefined) ??
              pascalize(data.entityName),
          );
          break;
        }

        case 'FunctionDeclaration': {
          utilities.default.push(
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            (declaration.id?.name as string | undefined) ??
              camelize(data.entityName),
          );
          break;
        }

        case 'Identifier': {
          // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
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
          // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
          console.error(`ERROR: Unknown type: ${declaration.type}`);
          console.log(file);
          console.log();
        }
      }

      return false;
    },

    visitExportNamedDeclaration(path) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const { declaration, specifiers } = path.value;

      // @ts-expect-error: Parameter 'specifier' implicitly has an 'any' type.
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
      specifiers.forEach((specifier) => {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        utilities.named.push(specifier.exported.name as string);
      });

      if (!declaration) {
        return false;
      }

      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      switch (declaration.type) {
        case 'ClassDeclaration': {
          utilities.named.push(
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            (declaration.id?.name as string | undefined) ??
              pascalize(data.entityName),
          );
          break;
        }

        case 'FunctionDeclaration': {
          utilities.named.push(
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
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
          // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
          declaration.declarations.forEach(({ id }) => {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            switch (id.type) {
              case 'Identifier': {
                // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
                utilities.named.push(id.name as string);
                return;
              }

              case 'ObjectPattern': {
                // @ts-expect-error: Parameter 'property' implicitly has an 'any' type.
                // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
                id.properties.forEach((property) => {
                  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
                  utilities.named.push(property.value as string);
                });
                return;
              }

              default: {
                // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
                console.log(`ERROR: Unknown ID type: ${id.type}`);
                console.log(file);
                console.log();
              }
            }
          });

          break;
        }

        default: {
          // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
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
