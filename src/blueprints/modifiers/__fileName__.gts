import {
  render,
  type TestContext as BaseTestContext,
} from '@ember/test-helpers';
import { module, skip } from 'qunit';
import <%= data.entity.camelizedName %> from '<%= data.packageName %>/modifiers/<%= data.entity.name %>';
import { setupRenderingTest } from '<%= data.testAppName %>/tests/helpers';

interface TestContext extends BaseTestContext {}

module('Integration | Modifier | <%= data.entity.name %>', function (hooks) {
  setupRenderingTest(hooks);

  skip('it renders', async function (this: TestContext, assert) {
    await render<TestContext>(
      <template>
        {{! @glint-expect-error }}
        <div {{<%= data.entity.camelizedName %>}}></div>
      </template>,
    );

    assert.ok(true);
  });
});
