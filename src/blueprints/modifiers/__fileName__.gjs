import { render } from '@ember/test-helpers';
import { module, skip } from 'qunit';
import <%= data.entity.camelizedName %> from '<%= data.packageName %>/modifiers/<%= data.entity.name %>';
import { setupRenderingTest } from '<%= data.testAppName %>/tests/helpers';

module('Integration | Modifier | <%= data.entity.name %>', function (hooks) {
  setupRenderingTest(hooks);

  skip('it renders', async function (assert) {
    await render(
      <template>
        <div {{<%= data.entity.camelizedName %>}}></div>
      </template>,
    );

    assert.ok(true);
  });
});
