import { module, test } from 'qunit';
import type Example1 from 'my-v2-addon/models/example-1';
import { setupTest } from 'test-app/tests/helpers';

module('Unit | Serializer | example-1', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    const store = this.owner.lookup('service:store');
    // @ts-expect-error: Property 'serializerFor' does not exist on type 'Store'.
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
    const serializer = store.serializerFor('example-1');

    assert.ok(serializer);
  });

  test('it serializes records', function (assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord<Example1>('example-1', {});

    const serializedRecord = model.serialize();

    assert.ok(serializedRecord);
  });
});
