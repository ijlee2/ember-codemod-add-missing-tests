import {
  render,
  type TestContext as BaseTestContext,
} from '@ember/test-helpers';
import { module, skip } from 'qunit';
import <%= data.entity.pascalizedName %> from '<%= data.packageName %>/helpers/<%= data.entity.name %>';
import { setupRenderingTest } from '<%= data.testAppName %>/tests/helpers';

interface TestContext extends BaseTestContext {}

module('Integration | Component | <%= data.entity.name %>', function (hooks) {
  setupRenderingTest(hooks);

  skip('it renders', async function (this: TestContext, assert) {
    await render<TestContext>(
      <template>
        {{! @glint-expect-error }}
        <<%= data.entity.pascalizedName %> />
      </template>,
    );

    assert.dom().hasText('');
  });
});
