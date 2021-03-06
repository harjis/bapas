import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  children: DS.hasMany('category', { inverse: 'parent' }),
  parent: DS.belongsTo('category', { inverse: 'children' }),
  oaccounts: DS.hasMany('oaccount'),
  name: DS.attr('string'),
  children_count: DS.attr('number'),
  depth: DS.attr('number'),

  root: Ember.computed.equal('depth', 0)
});
