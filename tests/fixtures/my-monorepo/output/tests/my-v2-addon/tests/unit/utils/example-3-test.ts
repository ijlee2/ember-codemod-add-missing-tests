import { module, test } from 'qunit';
import { myFunction1, myFunction2, myFunction3, MyUtility } from 'my-v2-addon/utils/example-3';
import { setupTest } from 'test-app/tests/helpers';

module('Unit | Utility | example-3', function (hooks) {
  setupTest(hooks);

  test('myFunction1', function (assert) {
    assert.ok(myFunction1);
  });

  test('myFunction2', function (assert) {
    assert.ok(myFunction2);
  });

  test('myFunction3', function (assert) {
    assert.ok(myFunction3);
  });

  test('MyUtility', function (assert) {
    assert.ok(MyUtility);
  });
});
