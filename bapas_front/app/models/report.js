import DS from 'ember-data';

export default DS.Model.extend({
  date: function () {
    return moment(this.get('id'));
  }.property('model'),
  negative_payments: DS.attr(),
  positive_payments: DS.attr(),
});
