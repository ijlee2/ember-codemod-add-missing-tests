import { render } from '@ember/test-helpers';
import { module, skip } from 'qunit';
import example1 from 'my-v1-app/helpers/example-1';
import { setupRenderingTest } from 'my-v1-app/tests/helpers';

module('Integration | Helper | example-1', function (hooks) {
  setupRenderingTest(hooks);

  skip('it renders', async function (assert) {
    await render(
      <template>
        {{example1 "1234"}}
      </template>,
    );

    assert.dom().hasText('1234');
  });
});
