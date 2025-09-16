import {
  render,
  type TestContext as BaseTestContext,
} from '@ember/test-helpers';
import { module, skip } from 'qunit';
import Example4 from 'my-v1-app/components/example-4';
import { setupRenderingTest } from 'my-v1-app/tests/helpers';

interface TestContext extends BaseTestContext {}

module('Integration | Component | example-4', function (hooks) {
  setupRenderingTest(hooks);

  skip('it renders', async function (this: TestContext, assert) {
    await render<TestContext>(
      <template>
        {{! @glint-expect-error }}
        <Example4 />
      </template>,
    );

    assert.dom().hasText('');
  });
});
