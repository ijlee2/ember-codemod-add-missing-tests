import type { TestContext as BaseTestContext } from '@ember/test-helpers';
import { module, test } from 'qunit';
import type <%= data.entity.pascalizedName %> from '<%= data.packageName %>/models/<%= data.entity.name %>';
import { setupTest } from '<%= data.testAppName %>/tests/helpers';

interface TestContext extends BaseTestContext {
  model: <%= data.entity.pascalizedName %>;
}

module('Unit | Model | <%= data.entity.name %>', function (hooks) {
  setupTest(hooks);

  hooks.beforeEach(function (this: TestContext) {
    const store = this.owner.lookup('service:store');

    this.model = store.createRecord<<%= data.entity.pascalizedName %>>('<%= data.entity.name %>', {});
  });

  test('it exists', function (this: TestContext, assert) {
    assert.ok(this.model);
  });
});
