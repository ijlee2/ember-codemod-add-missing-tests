import { render } from '@ember/test-helpers';
import { module, skip } from 'qunit';
import <%= data.entity.pascalizedName %> from '<%= data.packageName %>/helpers/<%= data.entity.name %>';
import { setupRenderingTest } from '<%= data.testAppName %>/tests/helpers';

module('Integration | Component | <%= data.entity.name %>', function (hooks) {
  setupRenderingTest(hooks);

  skip('it renders', async function (assert) {
    await render(
      <template>
        <<%= data.entity.pascalizedName %> />
      <template>,
    );

    assert.dom().hasText('');
  });
});
