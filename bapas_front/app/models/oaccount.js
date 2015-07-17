import DS from 'ember-data';

export default DS.Model.extend({
  payments: DS.hasMany('payment', { inverse: 'oaccount' }),
  category: DS.belongsTo('category'),
  name: DS.attr('string'),
  iban: DS.attr('string'),
  createdAt: DS.attr('date'),
  updatedAt: DS.attr('date'),

  hasCategory: function () {
    if (this.get('category') && this.get('category').get('id') !== null) {
      return true;
    }
    return false;
  }.property('category')
});
