import type { TestContext as BaseTestContext } from '@ember/test-helpers';
import { module, test } from 'qunit';
import Application from 'my-v1-app/controllers/application';
import { setupTest } from 'my-v1-app/tests/helpers';

interface TestContext extends BaseTestContext {
  controller: Application;
}

module('Unit | Controller | application', function (hooks) {
  setupTest(hooks);

  hooks.beforeEach(function (this: TestContext) {
    this.owner.register('controller:application', Application);

    this.controller = this.owner.lookup('controller:application') as Application;
  });

  test('it exists', function (this: TestContext, assert) {
    assert.ok(this.controller);
  });
});
