import { moduleForModel, test } from 'ember-qunit';
import Report from "bapas_front/models/report";

moduleForModel('report', 'Unit | Model | report', {
  needs: []
});

test('it exists', function(assert) {
  var model = this.subject();
  // var store = this.store();
  assert.ok(!!model);
});

test('returns moment date', function(assert) {
  var report = Report.create({});

  report.set('id', '2015-01-01');

  assert.equal(report.get('date')._isAMomentObject, true);
});
