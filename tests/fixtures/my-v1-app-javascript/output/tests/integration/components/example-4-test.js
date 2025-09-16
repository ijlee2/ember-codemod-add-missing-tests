import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import { module, skip } from 'qunit';
import { setupRenderingTest } from 'my-v1-app/tests/helpers';

module('Integration | Component | example-4', function (hooks) {
  setupRenderingTest(hooks);

  skip('it renders', async function (assert) {
    await render(
      hbs`
        <Example4 />
      `,
    );

    assert.dom().hasText('');
  });
});
