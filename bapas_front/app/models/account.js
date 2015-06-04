import DS from 'ember-data';

export default DS.Model.extend({
  payments: DS.hasMany('payment', {async:true}),
  name: DS.attr('string'),
  iban: DS.attr('string'),
  created_at: DS.attr('date'),
  updated_at: DS.attr('date')
});
