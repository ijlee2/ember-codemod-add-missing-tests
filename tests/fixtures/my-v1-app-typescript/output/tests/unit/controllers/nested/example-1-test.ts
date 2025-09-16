import type { TestContext as BaseTestContext } from '@ember/test-helpers';
import { module, test } from 'qunit';
import NestedExample1 from 'my-v1-app/controllers/nested/example-1';
import { setupTest } from 'my-v1-app/tests/helpers';

interface TestContext extends BaseTestContext {
  controller: NestedExample1;
}

module('Unit | Controller | nested/example-1', function (hooks) {
  setupTest(hooks);

  hooks.beforeEach(function (this: TestContext) {
    this.owner.register('controller:nested/example-1', NestedExample1);

    this.controller = this.owner.lookup('controller:nested/example-1') as NestedExample1;
  });

  test('it exists', function (this: TestContext, assert) {
    assert.ok(this.controller);
  });
});
