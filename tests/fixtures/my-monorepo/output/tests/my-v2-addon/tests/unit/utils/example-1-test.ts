import { module, test } from 'qunit';
import MyUtility from 'my-v2-addon/utils/example-1';
import { setupTest } from 'test-app/tests/helpers';

module('Unit | Utility | example-1', function (hooks) {
  setupTest(hooks);

  test('MyUtility', function (assert) {
    assert.ok(MyUtility);
  });
});
