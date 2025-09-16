import { module, test } from 'qunit';
import NestedExample1 from 'my-v1-app/routes/nested/example-1';
import { setupTest } from 'my-v1-app/tests/helpers';

module('Unit | Route | nested/example-1', function (hooks) {
  setupTest(hooks);

  hooks.beforeEach(function () {
    this.owner.register('route:nested/example-1', NestedExample1);

    this.route = this.owner.lookup('route:nested/example-1');
  });

  test('it exists', function (assert) {
    assert.ok(this.route);
  });
});
