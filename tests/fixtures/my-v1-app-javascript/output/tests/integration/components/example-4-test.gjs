import { render } from '@ember/test-helpers';
import { module, skip } from 'qunit';
import Example4 from 'my-v1-app/components/example-4';
import { setupRenderingTest } from 'my-v1-app/tests/helpers';

module('Integration | Component | example-4', function (hooks) {
  setupRenderingTest(hooks);

  skip('it renders', async function (assert) {
    await render(
      <template>
        <Example4 />
      <template>,
    );

    assert.dom().hasText('');
  });
});
