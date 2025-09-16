import { module, test } from 'qunit';
import <%= data.entity.pascalizedName %> from '<%= data.packageName %>/routes/<%= data.entity.name %>';
import { setupTest } from '<%= data.testAppName %>/tests/helpers';

module('Unit | Route | <%= data.entity.name %>', function (hooks) {
  setupTest(hooks);

  hooks.beforeEach(function () {
    this.owner.register('route:<%= data.entity.name %>', <%= data.entity.pascalizedName %>);

    this.route = this.owner.lookup('route:<%= data.entity.name %>');
  });

  test('it exists', function (assert) {
    assert.ok(this.route);
  });
});
