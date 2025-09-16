import { module, test } from 'qunit';
import { setupTest } from '<%= data.testAppName %>/tests/helpers';

module('Unit | Adapter | <%= data.entity.name %>', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    const adapter = this.owner.lookup('adapter:<%= data.entity.name %>');

    assert.ok(adapter);
  });
});
