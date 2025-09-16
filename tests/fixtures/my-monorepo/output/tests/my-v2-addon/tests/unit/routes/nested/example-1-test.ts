import type { TestContext as BaseTestContext } from '@ember/test-helpers';
import { module, test } from 'qunit';
import NestedExample1 from 'my-v2-addon/routes/nested/example-1';
import { setupTest } from 'test-app/tests/helpers';

interface TestContext extends BaseTestContext {
  route: NestedExample1;
}

module('Unit | Route | nested/example-1', function (hooks) {
  setupTest(hooks);

  hooks.beforeEach(function (this: TestContext) {
    this.owner.register('route:nested/example-1', NestedExample1);

    this.route = this.owner.lookup('route:nested/example-1') as NestedExample1;
  });

  test('it exists', function (this: TestContext, assert) {
    assert.ok(this.route);
  });
});
