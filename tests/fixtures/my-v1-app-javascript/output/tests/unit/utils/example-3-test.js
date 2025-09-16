import { module, test } from 'qunit';
import { myFunction1, myFunction2, myFunction3, MyUtility } from 'my-v1-app/utils/example-3';
import { setupTest } from 'my-v1-app/tests/helpers';

module('Unit | Utility | example-3', function (hooks) {
  setupTest(hooks);

  module('myFunction1', function () {
    test('it exists', function (assert) {
      assert.ok(myFunction1);
    });
  });

  module('myFunction2', function () {
    test('it exists', function (assert) {
      assert.ok(myFunction2);
    });
  });

  module('myFunction3', function () {
    test('it exists', function (assert) {
      assert.ok(myFunction3);
    });
  });

  module('MyUtility', function () {
    test('it exists', function (assert) {
      assert.ok(MyUtility);
    });
  });
});
