import type { TestContext as BaseTestContext } from '@ember/test-helpers';
import { module, test } from 'qunit';
import <%= data.entity.pascalizedName %> from '<%= data.packageName %>/controllers/<%= data.entity.name %>';
import { setupTest } from '<%= data.testAppName %>/tests/helpers';

interface TestContext extends BaseTestContext {
  controller: <%= data.entity.pascalizedName %>;
}

module('Unit | Controller | <%= data.entity.name %>', function (hooks) {
  setupTest(hooks);

  hooks.beforeEach(function (this: TestContext) {
    this.owner.register('controller:<%= data.entity.name %>', <%= data.entity.pascalizedName %>);

    this.controller = this.owner.lookup('controller:<%= data.entity.name %>') as <%= data.entity.pascalizedName %>;
  });

  test('it exists', function (this: TestContext, assert) {
    assert.ok(this.controller);
  });
});
