import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    selectCategory: function (category) {
      this.sendAction('selectedCategory', category);
    }
  }
});
