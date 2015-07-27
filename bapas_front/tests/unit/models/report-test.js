import { moduleForModel, test } from 'ember-qunit';

moduleForModel('report', 'Unit | Model | report', {
  needs: []
});

test('it exists', function (assert) {
  var model = this.subject();
  assert.ok(!!model);
});

test('returns moment date', function (assert) {
  var report = this.subject({ id: '2015-01-01' });

  assert.equal(report.get('date')._isAMomentObject, true);
  assert.equal(report.get('date').format('DD-MM-YYYY'), '01-01-2015');
});
