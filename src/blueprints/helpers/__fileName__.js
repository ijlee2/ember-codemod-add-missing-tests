import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import { module, skip } from 'qunit';
import { setupRenderingTest } from '<%= data.testAppName %>/tests/helpers';

module('Integration | Helper | <%= data.entity.name %>', function (hooks) {
  setupRenderingTest(hooks);

  skip('it renders', async function (assert) {
    await render(
      hbs`
        {{<%= data.entity.name %> "1234"}}
      `,
    );

    assert.dom().hasText('1234');
  });
});
