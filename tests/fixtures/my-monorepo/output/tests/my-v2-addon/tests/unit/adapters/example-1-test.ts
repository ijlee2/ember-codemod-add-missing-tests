import { module, test } from 'qunit';
import { setupTest } from 'test-app/tests/helpers';

module('Unit | Adapter | example-1', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    const adapter = this.owner.lookup('adapter:example-1');

    assert.ok(adapter);
  });
});
