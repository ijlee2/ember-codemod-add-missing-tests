import {
  render,
  type TestContext as BaseTestContext,
} from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import { module, skip } from 'qunit';
import example1 from 'my-v2-addon/modifiers/example-1';
import { setupRenderingTest } from 'test-app/tests/helpers';

interface TestContext extends BaseTestContext {}

module('Integration | Modifier | example-1', function (hooks) {
  setupRenderingTest(hooks);

  skip('it renders', async function (this: TestContext, assert) {
    await render<TestContext>(
      hbs`
        {{! @glint-expect-error }}
        <div {{example1}}></div>
      `,
    );

    assert.ok(true);
  });
});
