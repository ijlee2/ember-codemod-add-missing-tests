import type { TestContext as BaseTestContext } from '@ember/test-helpers';
import { module, test } from 'qunit';
import type Example1 from 'my-v2-addon/models/example-1';
import { setupTest } from 'test-app/tests/helpers';

interface TestContext extends BaseTestContext {
  model: Example1;
}

module('Unit | Model | example-1', function (hooks) {
  setupTest(hooks);

  hooks.beforeEach(function (this: TestContext) {
    const store = this.owner.lookup('service:store');

    this.model = store.createRecord<Example1>('example-1', {});
  });

  test('it exists', function (this: TestContext, assert) {
    assert.ok(this.model);
  });
});
