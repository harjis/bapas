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
      category.save();

      this.set('newName', '');
    },
    selectCategory: function (category) {
      this.set('selectedCategory', category);
    },
    destroyCategory: function (category) {
      this.store.find('category', category.get('id')).then(function (category) {
        category.deleteRecord();
        category.save();
      });
    }
  }
});
