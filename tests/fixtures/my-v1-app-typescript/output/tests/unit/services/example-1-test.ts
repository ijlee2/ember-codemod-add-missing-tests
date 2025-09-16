import type { TestContext as BaseTestContext } from '@ember/test-helpers';
import { module, test } from 'qunit';
import type Example1 from 'my-v1-app/services/example-1';
import { setupTest } from 'my-v1-app/tests/helpers';

interface TestContext extends BaseTestContext {
  service: Example1;
}

module('Unit | Service | example-1', function (hooks) {
  setupTest(hooks);

  hooks.beforeEach(function (this: TestContext) {
    this.service = this.owner.lookup('service:example-1');
  });

  test('it exists', function (this: TestContext, assert) {
    assert.ok(this.service);
  });
});
