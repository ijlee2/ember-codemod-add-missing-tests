import {
  render,
  type TestContext as BaseTestContext,
} from '@ember/test-helpers';
import { module, skip } from 'qunit';
import Example2 from 'my-v2-addon/components/example-2';
import { setupRenderingTest } from 'test-app/tests/helpers';

interface TestContext extends BaseTestContext {}

module('Integration | Component | example-2', function (hooks) {
  setupRenderingTest(hooks);

  skip('it renders', async function (this: TestContext, assert) {
    await render<TestContext>(
      <template>
        {{! @glint-expect-error }}
        <Example2 />
      </template>,
    );

    assert.dom().hasText('');
  });
});
