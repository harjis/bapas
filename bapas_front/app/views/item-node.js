import Ember from 'ember';

export default Ember.View.extend({
  tagName: 'li',
  classNames: ['a-collection'],
  content: ['A', 'B', 'C'],
  itemViewClass: Ember.View.extend({
    template: Ember.Handlebars.compile("the letter: {{view.content}}")
  })
});
