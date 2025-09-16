import { module, test } from 'qunit';
import { myFunction1 } from 'my-v2-addon/utils/example-2';
import { setupTest } from 'test-app/tests/helpers';

module('Unit | Utility | example-2', function (hooks) {
  setupTest(hooks);

  module('myFunction1', function () {
    test('it exists', function (assert) {
      assert.ok(myFunction1);
    });
  });
});
