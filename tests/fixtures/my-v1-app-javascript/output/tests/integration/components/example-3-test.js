import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import { module, skip } from 'qunit';
import { setupRenderingTest } from 'my-v1-app/tests/helpers';

module('Integration | Component | example-3', function (hooks) {
  setupRenderingTest(hooks);

  skip('it renders', async function (assert) {
    await render(
      hbs`
        <Example3 />
      `,
    );

    assert.dom().hasText('');
  });
});
