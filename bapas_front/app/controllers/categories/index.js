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

      var category = this.store.createRecord('category', {
        name: name
      });
      category.save();

      this.set('newName', '');
    },
    setCategory: function (category) {
      this.set('selectedCategory', category);
    }
  }
});
