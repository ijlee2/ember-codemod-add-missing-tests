import { module, test } from 'qunit';
import Example1 from 'my-v1-app/routes/example-1';
import { setupTest } from 'my-v1-app/tests/helpers';

module('Unit | Route | example-1', function (hooks) {
  setupTest(hooks);

  hooks.beforeEach(function () {
    this.owner.register('route:example-1', Example1);

    this.route = this.owner.lookup('route:example-1');
  });

  test('it exists', function (assert) {
    assert.ok(this.route);
  });
});
