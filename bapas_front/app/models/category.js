import DS from 'ember-data';

export default DS.Model.extend({
  children: DS.hasMany('category', { inverse: 'parent' }),
  parent: DS.belongsTo('category', { inverse: 'children' }),
  name: DS.attr('string')
});
