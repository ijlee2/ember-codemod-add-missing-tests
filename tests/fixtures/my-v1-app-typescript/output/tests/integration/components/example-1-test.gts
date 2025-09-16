import {
  render,
  type TestContext as BaseTestContext,
} from '@ember/test-helpers';
import { module, skip } from 'qunit';
import Example1 from 'my-v1-app/components/example-1';
import { setupRenderingTest } from 'my-v1-app/tests/helpers';

interface TestContext extends BaseTestContext {}

module('Integration | Component | example-1', function (hooks) {
  setupRenderingTest(hooks);

  skip('it renders', async function (this: TestContext, assert) {
    await render<TestContext>(
      <template>
        {{! @glint-expect-error }}
        <Example1 />
      </template>,
    );

    assert.dom().hasText('');
  });
});
