import { convertFixtureToJson } from '@codemod-utils/tests';

const inputProject = convertFixtureToJson('my-v1-app-typescript/input');
const outputProject = convertFixtureToJson('my-v1-app-typescript/output');

export { inputProject, outputProject };
