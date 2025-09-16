import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import { module, skip } from 'qunit';
import { setupRenderingTest } from 'my-v1-app/tests/helpers';

module('Integration | Modifier | example-1', function (hooks) {
  setupRenderingTest(hooks);

  skip('it renders', async function (assert) {
    await render(
      hbs`
        <div {{example-1}}></div>
      `,
    );

    assert.ok(true);
  });
});
