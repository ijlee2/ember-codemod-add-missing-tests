import type { TestContext as BaseTestContext } from '@ember/test-helpers';
import { module, test } from 'qunit';
import Application from 'my-v1-app/routes/application';
import { setupTest } from 'my-v1-app/tests/helpers';

interface TestContext extends BaseTestContext {
  route: Application;
}

module('Unit | Route | application', function (hooks) {
  setupTest(hooks);

  hooks.beforeEach(function (this: TestContext) {
    this.owner.register('route:application', Application);

    this.route = this.owner.lookup('route:application') as Application;
  });

  test('it exists', function (this: TestContext, assert) {
    assert.ok(this.route);
  });
});
