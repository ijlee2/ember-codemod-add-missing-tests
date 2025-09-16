import type { TestContext as BaseTestContext } from '@ember/test-helpers';
import { module, test } from 'qunit';
import type NestedExample1 from 'my-v1-app/services/nested/example-1';
import { setupTest } from 'my-v1-app/tests/helpers';

interface TestContext extends BaseTestContext {
  service: NestedExample1;
}

module('Unit | Service | nested/example-1', function (hooks) {
  setupTest(hooks);

  hooks.beforeEach(function (this: TestContext) {
    this.service = this.owner.lookup('service:nested/example-1');
  });

  test('it exists', function (this: TestContext, assert) {
    assert.ok(this.service);
  });
});
