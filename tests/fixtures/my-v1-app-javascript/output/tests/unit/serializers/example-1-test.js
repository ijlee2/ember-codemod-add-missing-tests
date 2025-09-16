import { module, test } from 'qunit';
import { setupTest } from 'my-v1-app/tests/helpers';

module('Unit | Serializer | example-1', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    const store = this.owner.lookup('service:store');
    const serializer = store.serializerFor('example-1');

    assert.ok(serializer);
  });

  test('it serializes records', function (assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('example-1', {});

    const serializedRecord = model.serialize();

    assert.ok(serializedRecord);
  });
});
