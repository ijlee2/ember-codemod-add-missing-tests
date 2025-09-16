import { module, test } from 'qunit';
import Example1 from 'my-v1-app/controllers/example-1';
import { setupTest } from 'my-v1-app/tests/helpers';

module('Unit | Controller | example-1', function (hooks) {
  setupTest(hooks);

  hooks.beforeEach(function () {
    this.owner.register('controller:example-1', Example1);

    this.controller = this.owner.lookup('controller:example-1');
  });

  test('it exists', function (assert) {
    assert.ok(this.controller);
  });
});
