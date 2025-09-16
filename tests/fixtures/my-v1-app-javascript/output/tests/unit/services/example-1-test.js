import { module, test } from 'qunit';
import { setupTest } from 'my-v1-app/tests/helpers';

module('Unit | Service | example-1', function (hooks) {
  setupTest(hooks);

  hooks.beforeEach(function () {
    this.service = this.owner.lookup('service:example-1');
  });

  test('it exists', function (assert) {
    assert.ok(this.service);
  });
});
