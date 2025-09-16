import {
  render,
  type TestContext as BaseTestContext,
} from '@ember/test-helpers';
import { module, skip } from 'qunit';
import NestedExample2 from 'my-v2-addon/components/nested/example-2';
import { setupRenderingTest } from 'test-app/tests/helpers';

interface TestContext extends BaseTestContext {}

module('Integration | Component | nested/example-2', function (hooks) {
  setupRenderingTest(hooks);

  skip('it renders', async function (this: TestContext, assert) {
    await render<TestContext>(
      <template>
        {{! @glint-expect-error }}
        <NestedExample2 />
      </template>,
    );

    assert.dom().hasText('');
  });
});
