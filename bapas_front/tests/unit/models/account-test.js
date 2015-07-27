import { moduleForModel, test } from 'ember-qunit';

moduleForModel('account', 'Unit | Model | account', {
  needs: ['model:payment', 'model:oaccount']
});

test('it exists', function(assert) {
  var model = this.subject();
  // var store = this.store();
  assert.ok(!!model);
});
