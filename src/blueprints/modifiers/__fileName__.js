import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import { module, skip } from 'qunit';
import { setupRenderingTest } from '<%= data.testAppName %>/tests/helpers';

module('Integration | Modifier | <%= data.entity.name %>', function (hooks) {
  setupRenderingTest(hooks);

  skip('it renders', async function (assert) {
    await render(
      hbs`
        <div {{<%= data.entity.name %>}}></div>
      `,
    );

    assert.ok(true);
  });
});
