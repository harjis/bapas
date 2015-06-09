import Ember from 'ember';

export default Ember.Controller.extend({
  selectedCategory: null,
  selectedCategoryName: function () {
    if (this.get('selectedCategory')) {
      return this.get('selectedCategory').get('name');
    }
    else {
      return '';
    }
  }.property('selectedCategory'),
  actions: {
    createCategory: function () {
      var name = this.get('newName').trim();
      var parent = this.get('selectedCategory');
      var category = this.store.createRecord('category', {
        name: name,
        parent: parent
      });
      category.save().then(function (child) {
        parent.get("children").addObject(child);
      });

      this.set('newName', '');
    },
    selectCategory: function (category) {
      this.set('selectedCategory', category);
    }
  },
  categories: Ember.computed.alias('model'),
  roots: Ember.computed.filterBy('categories', 'root')
});
