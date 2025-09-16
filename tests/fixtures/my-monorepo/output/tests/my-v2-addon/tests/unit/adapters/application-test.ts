import { module, test } from 'qunit';
import { setupTest } from 'test-app/tests/helpers';

module('Unit | Adapter | application', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    const adapter = this.owner.lookup('adapter:application');

    assert.ok(adapter);
  });
});
