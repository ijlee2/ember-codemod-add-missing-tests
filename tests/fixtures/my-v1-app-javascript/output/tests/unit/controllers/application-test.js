import { module, test } from 'qunit';
import Application from 'my-v1-app/controllers/application';
import { setupTest } from 'my-v1-app/tests/helpers';

module('Unit | Controller | application', function (hooks) {
  setupTest(hooks);

  hooks.beforeEach(function () {
    this.owner.register('controller:application', Application);

    this.controller = this.owner.lookup('controller:application');
  });

  test('it exists', function (assert) {
    assert.ok(this.controller);
  });
});
