import Ember from 'ember';

export default Ember.ArrayController.extend({
  actions: {
    createCategory: function () {
      var name = this.get('newName').trim();

      var category = this.store.createRecord('category', {
        name: name
      });
      category.save();

      this.set('newName', '');
    }
  }
});
