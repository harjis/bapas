import DS from 'ember-data';

export default DS.Model.extend({
  children:  hasMany('category', { inverse: 'parent' }),
  parent:    belongsTo('category', { inverse: 'children' }),
  name:      DS.attr('string'),
  createdAt: DS.attr('date'),
  updatedAt: DS.attr('date')
});
