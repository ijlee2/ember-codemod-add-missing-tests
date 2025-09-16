import { module, test } from 'qunit';
import Application from 'my-v1-app/routes/application';
import { setupTest } from 'my-v1-app/tests/helpers';

module('Unit | Route | application', function (hooks) {
  setupTest(hooks);

  hooks.beforeEach(function () {
    this.owner.register('route:application', Application);

    this.route = this.owner.lookup('route:application');
  });

  test('it exists', function (assert) {
    assert.ok(this.route);
  });
});
