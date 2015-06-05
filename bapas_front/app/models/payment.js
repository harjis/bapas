import DS from 'ember-data';

export default DS.Model.extend({
  account: DS.belongsTo('account', { async: true }),
  oaccount: DS.belongsTo('oaccount', { async: true }),
  entryDate: DS.attr('date'),
  valueDate: DS.attr('date'),
  paymentDate: DS.attr('date'),
  amount: DS.attr('string'),
  bic: DS.attr('string'),
  action: DS.attr('string'),
  reference: DS.attr('string'),
  message: DS.attr('string'),
  cardNumber: DS.attr('string'),
  createdAt: DS.attr('date'),
  updatedAt: DS.attr('date')
});
