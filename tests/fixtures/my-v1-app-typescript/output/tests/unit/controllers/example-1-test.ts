import type { TestContext as BaseTestContext } from '@ember/test-helpers';
import { module, test } from 'qunit';
import Example1 from 'my-v1-app/controllers/example-1';
import { setupTest } from 'my-v1-app/tests/helpers';

interface TestContext extends BaseTestContext {
  controller: Example1;
}

module('Unit | Controller | example-1', function (hooks) {
  setupTest(hooks);

  hooks.beforeEach(function (this: TestContext) {
    this.owner.register('controller:example-1', Example1);

    this.controller = this.owner.lookup('controller:example-1') as Example1;
  });

  test('it exists', function (this: TestContext, assert) {
    assert.ok(this.controller);
  });
});
