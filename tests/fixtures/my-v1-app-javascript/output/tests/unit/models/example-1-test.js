import { module, test } from 'qunit';
import { setupTest } from 'my-v1-app/tests/helpers';

module('Unit | Model | example-1', function (hooks) {
  setupTest(hooks);

  hooks.beforeEach(function () {
    const store = this.owner.lookup('service:store');

    this.model = store.createRecord('example-1', {});
  });

  test('it exists', function (assert) {
    assert.ok(this.model);
  });
});
