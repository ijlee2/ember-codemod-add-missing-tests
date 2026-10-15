<% if (data.entity.name === 'application') {%>import { module, test } from 'qunit';
import { setupTest } from '<%= data.testAppName %>/tests/helpers';

module('Unit | Serializer | <%= data.entity.name %>', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    const store = this.owner.lookup('service:store');
    const serializer = store.serializerFor('<%= data.entity.name %>');

    assert.ok(serializer);
  });
});<% } else { %>import { module, test } from 'qunit';
import type <%= data.entity.pascalizedName %> from '<%= data.packageName %>/models/<%= data.entity.name %>';
import { setupTest } from '<%= data.testAppName %>/tests/helpers';

module('Unit | Serializer | <%= data.entity.name %>', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    const store = this.owner.lookup('service:store');
    const serializer = store.serializerFor('<%= data.entity.name %>');

    assert.ok(serializer);
  });

  test('it serializes records', function (assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord<<%= data.entity.pascalizedName %>>('<%= data.entity.name %>', {});

    const serializedRecord = model.serialize();

    assert.ok(serializedRecord);
  });
});<% } %>
