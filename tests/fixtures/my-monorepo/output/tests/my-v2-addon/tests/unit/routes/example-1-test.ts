import type { TestContext as BaseTestContext } from '@ember/test-helpers';
import { module, test } from 'qunit';
import Example1 from 'my-v2-addon/routes/example-1';
import { setupTest } from 'test-app/tests/helpers';

interface TestContext extends BaseTestContext {
  route: Example1;
}

module('Unit | Route | example-1', function (hooks) {
  setupTest(hooks);

  hooks.beforeEach(function (this: TestContext) {
    this.owner.register('route:example-1', Example1);

    this.route = this.owner.lookup('route:example-1') as Example1;
  });

  test('it exists', function (this: TestContext, assert) {
    assert.ok(this.route);
  });
});
