import type { TestContext as BaseTestContext } from '@ember/test-helpers';
import { module, test } from 'qunit';
import type <%= data.entity.pascalizedName %> from '<%= data.packageName %>/services/<%= data.entity.name %>';
import { setupTest } from '<%= data.testAppName %>/tests/helpers';

interface TestContext extends BaseTestContext {
  service: <%= data.entity.pascalizedName %>;
}

module('Unit | Service | <%= data.entity.name %>', function (hooks) {
  setupTest(hooks);

  hooks.beforeEach(function (this: TestContext) {
    this.service = this.owner.lookup('service:<%= data.entity.name %>');
  });

  test('it exists', function (this: TestContext, assert) {
    assert.ok(this.service);
  });
});
