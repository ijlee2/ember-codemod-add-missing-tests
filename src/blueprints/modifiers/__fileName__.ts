import {
  render,
  type TestContext as BaseTestContext,
} from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import { module, skip } from 'qunit';
import { setupRenderingTest } from '<%= data.testAppName %>/tests/helpers';

interface TestContext extends BaseTestContext {}

module('Integration | Modifier | <%= data.entity.name %>', function (hooks) {
  setupRenderingTest(hooks);

  skip('it renders', async function (this: TestContext, assert) {
    await render<TestContext>(
      hbs`
        {{! @glint-expect-error }}
        <div {{<%= data.entity.name %>}}></div>
      `,
    );

    assert.ok(true);
  });
});
