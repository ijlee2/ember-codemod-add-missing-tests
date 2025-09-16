import { module, test } from 'qunit';
import <%= data.entity.pascalizedName %> from '<%= data.packageName %>/controllers/<%= data.entity.name %>';
import { setupTest } from '<%= data.testAppName %>/tests/helpers';

module('Unit | Controller | <%= data.entity.name %>', function (hooks) {
  setupTest(hooks);

  hooks.beforeEach(function () {
    this.owner.register('controller:<%= data.entity.name %>', <%= data.entity.pascalizedName %>);

    this.controller = this.owner.lookup('controller:<%= data.entity.name %>');
  });

  test('it exists', function (assert) {
    assert.ok(this.controller);
  });
});
