import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import { module, skip } from 'qunit';
import { setupRenderingTest } from '<%= data.testAppName %>/tests/helpers';

module('Integration | Component | <%= data.entity.name %>', function (hooks) {
  setupRenderingTest(hooks);

  skip('it renders', async function (assert) {
    await render(
      hbs`
        <<%= data.entity.doubleColonizedName %> />
      `,
    );

    assert.dom().hasText('');
  });
});
