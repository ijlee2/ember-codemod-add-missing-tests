import { module, test } from 'qunit';
import { setupTest } from 'my-v1-app/tests/helpers';

module('Unit | Serializer | application', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    const store = this.owner.lookup('service:store');
    // @ts-expect-error: Property 'serializerFor' does not exist on type 'Store'.
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
    const serializer = store.serializerFor('application');

    assert.ok(serializer);
  });
});
