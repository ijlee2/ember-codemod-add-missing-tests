import type { TestContext as BaseTestContext } from '@ember/test-helpers';
import { module, test } from 'qunit';
import <%= data.entity.pascalizedName %> from '<%= data.packageName %>/routes/<%= data.entity.name %>';
import { setupTest } from '<%= data.testAppName %>/tests/helpers';

interface TestContext extends BaseTestContext {
  route: <%= data.entity.pascalizedName %>;
}

module('Unit | Route | <%= data.entity.name %>', function (hooks) {
  setupTest(hooks);

  hooks.beforeEach(function (this: TestContext) {
    this.owner.register('route:<%= data.entity.name %>', <%= data.entity.pascalizedName %>);

    this.route = this.owner.lookup('route:<%= data.entity.name %>') as <%= data.entity.pascalizedName %>;
  });

  test('it exists', function (this: TestContext, assert) {
    assert.ok(this.route);
  });
});
