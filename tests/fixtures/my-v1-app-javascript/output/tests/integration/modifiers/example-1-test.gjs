import { render } from '@ember/test-helpers';
import { module, skip } from 'qunit';
import example1 from 'my-v1-app/modifiers/example-1';
import { setupRenderingTest } from 'my-v1-app/tests/helpers';

module('Integration | Modifier | example-1', function (hooks) {
  setupRenderingTest(hooks);

  skip('it renders', async function (assert) {
    await render(
      <template>
        <div {{example1}}></div>
      </template>,
    );

    assert.ok(true);
  });
});
