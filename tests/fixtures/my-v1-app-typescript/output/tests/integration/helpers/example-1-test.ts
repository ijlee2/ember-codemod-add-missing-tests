import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import { module, skip } from 'qunit';
import { setupRenderingTest } from 'my-v1-app/tests/helpers';

module('Integration | Helper | example-1', function (hooks) {
  setupRenderingTest(hooks);

  skip('it renders', async function (assert) {
    await render(
      hbs`
        {{! @glint-expect-error }}
        {{example-1 "1234"}}
      `,
    );

    assert.dom().hasText('1234');
  });
});
