import { module, test } from 'qunit';
import MyUtility from 'my-v1-app/utils/example-1';
import { setupTest } from 'my-v1-app/tests/helpers';

module('Unit | Utility | example-1', function (hooks) {
  setupTest(hooks);

  module('MyUtility', function () {
    test('it exists', function (assert) {
      assert.ok(MyUtility);
    });
  });
});
