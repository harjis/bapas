import DS from 'ember-data';

export default DS.Model.extend({
  account: DS.belongsTo('account'),
  oaccount: DS.belongsTo('oaccount'),
  entry_date: DS.attr('date'),
  value_date: DS.attr('date'),
  payment_date: DS.attr('date'),
  amount: DS.attr('string'),
  bic: DS.attr('string'),
  action: DS.attr('string'),
  reference: DS.attr('string'),
  message: DS.attr('string'),
  cardNumber: DS.attr('string'),
  created_at: DS.attr('date'),
  updated_at: DS.attr('date')
});
