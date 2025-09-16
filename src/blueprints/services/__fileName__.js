import { module, test } from 'qunit';
import { setupTest } from '<%= data.testAppName %>/tests/helpers';

module('Unit | Service | <%= data.entity.name %>', function (hooks) {
  setupTest(hooks);

  hooks.beforeEach(function () {
    this.service = this.owner.lookup('service:<%= data.entity.name %>');
  });

  test('it exists', function (assert) {
    assert.ok(this.service);
  });
});
