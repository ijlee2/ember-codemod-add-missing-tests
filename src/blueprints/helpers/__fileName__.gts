import { render } from '@ember/test-helpers';
import { module, skip } from 'qunit';
import <%= data.entity.camelizedName %> from '<%= data.packageName %>/helpers/<%= data.entity.name %>';
import { setupRenderingTest } from '<%= data.testAppName %>/tests/helpers';

module('Integration | Helper | <%= data.entity.name %>', function (hooks) {
  setupRenderingTest(hooks);

  skip('it renders', async function (assert) {
    await render(
      <template>
        {{! @glint-expect-error }}
        {{<%= data.entity.camelizedName %> "1234"}}
      </template>,
    );

    assert.dom().hasText('1234');
  });
});
