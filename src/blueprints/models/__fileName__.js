import { module, test } from 'qunit';
import { setupTest } from '<%= data.testAppName %>/tests/helpers';

module('Unit | Model | <%= data.entity.name %>', function (hooks) {
  setupTest(hooks);

  hooks.beforeEach(function () {
    const store = this.owner.lookup('service:store');

    this.model = store.createRecord('<%= data.entity.name %>', {});
  });

  test('it exists', function (assert) {
    assert.ok(this.model);
  });
});
