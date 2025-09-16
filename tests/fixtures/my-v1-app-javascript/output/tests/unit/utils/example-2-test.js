import { module, test } from 'qunit';
import { myFunction1 } from 'my-v1-app/utils/example-2';
import { setupTest } from 'my-v1-app/tests/helpers';

module('Unit | Utility | example-2', function (hooks) {
  setupTest(hooks);

  test('myFunction1', function (assert) {
    assert.ok(myFunction1);
  });
});
