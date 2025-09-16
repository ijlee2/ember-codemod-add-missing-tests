import { render } from '@ember/test-helpers';
import { module, skip } from 'qunit';
import NestedExample2 from 'my-v1-app/components/nested/example-2';
import { setupRenderingTest } from 'my-v1-app/tests/helpers';

module('Integration | Component | nested/example-2', function (hooks) {
  setupRenderingTest(hooks);

  skip('it renders', async function (assert) {
    await render(
      <template>
        <NestedExample2 />
      <template>,
    );

    assert.dom().hasText('');
  });
});
