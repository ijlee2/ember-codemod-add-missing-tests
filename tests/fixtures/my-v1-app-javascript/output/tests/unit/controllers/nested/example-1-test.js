import { module, test } from 'qunit';
import NestedExample1 from 'my-v1-app/controllers/nested/example-1';
import { setupTest } from 'my-v1-app/tests/helpers';

module('Unit | Controller | nested/example-1', function (hooks) {
  setupTest(hooks);

  hooks.beforeEach(function () {
    this.owner.register('controller:nested/example-1', NestedExample1);

    this.controller = this.owner.lookup('controller:nested/example-1');
  });

  test('it exists', function (assert) {
    assert.ok(this.controller);
  });
});
