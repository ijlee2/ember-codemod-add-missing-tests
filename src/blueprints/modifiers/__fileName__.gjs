import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import { module, skip } from 'qunit';
import <%= data.entity.camelizedName %> from '<%= data.packageName %>/modifiers/<%= data.entity.name %>';
import { setupRenderingTest } from '<%= data.testAppName %>/tests/helpers';

module('Integration | Modifier | <%= data.entity.name %>', function (hooks) {
  setupRenderingTest(hooks);

  skip('it renders', async function (assert) {
    await render(
      hbs`
        <div {{<%= data.entity.camelizedName %>}}></div>
      `,
    );

    assert.ok(true);
  });
});
