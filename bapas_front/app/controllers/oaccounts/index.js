import Ember from 'ember';

export default Ember.Controller.extend({
  selectedCategory: function () {
    if (this.get('model').get('category') === null) {
      return this.store.find('category').get('firstObject');
    }
    else {
      return this.get('model').get('category');
    }
  }.property()
});
