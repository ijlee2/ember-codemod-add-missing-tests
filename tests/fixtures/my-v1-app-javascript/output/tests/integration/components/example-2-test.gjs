import { render } from '@ember/test-helpers';
import { module, skip } from 'qunit';
import Example2 from 'my-v1-app/components/example-2';
import { setupRenderingTest } from 'my-v1-app/tests/helpers';

module('Integration | Component | example-2', function (hooks) {
  setupRenderingTest(hooks);

  skip('it renders', async function (assert) {
    await render(
      <template>
        <Example2 />
      </template>,
    );

    assert.dom().hasText('');
  });
});
