import DS from 'ember-data';

export default DS.Model.extend({
  payments:  DS.hasMany('payment', { async: true, inverse: 'oaccount' }),
  name:      DS.attr('string'),
  iban:      DS.attr('string'),
  createdAt: DS.attr('date'),
  updatedAt: DS.attr('date')
});
