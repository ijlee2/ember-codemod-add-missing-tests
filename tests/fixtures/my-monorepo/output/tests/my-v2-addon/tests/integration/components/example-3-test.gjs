import { render } from '@ember/test-helpers';
import { module, skip } from 'qunit';
import Example3 from 'my-v2-addon/components/example-3';
import { setupRenderingTest } from 'test-app/tests/helpers';

module('Integration | Component | example-3', function (hooks) {
  setupRenderingTest(hooks);

  skip('it renders', async function (assert) {
    await render(
      <template>
        <Example3 />
      </template>,
    );

    assert.dom().hasText('');
  });
});
