import DS from 'ember-data';

export default DS.Model.extend({
  entry_date: DS.attr('date'),
  value_date: DS.attr('date'),
  payment_date: DS.attr('date'),
  amount: DS.attr('float'),
  bic: DS.attr('string'),
  action: DS.attr('string'),
  reference: DS.attr('string'),
  message: DS.attr('string'),
  card_number: DS.attr('string'),
  created_at: DS.attr('date'),
  updated_at: DS.attr('date')
});
