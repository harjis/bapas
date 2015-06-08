import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    selectCategory: function(category) {
      console.log(category);
      console.log('333');
      this.sendAction('selectedCategory', category);
    }
  }
});
