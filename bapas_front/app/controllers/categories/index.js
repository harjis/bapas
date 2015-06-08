import Ember from 'ember';

export default Ember.Controller.extend({
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
      console.log('111');
      console.log(category);
    }
  }
});
