import Ember from 'ember';

export default Ember.Controller.extend({
  selectedCategory: function () {
    return this.get('model').get('category').id;
  }.property(),
  actions: {
    saveOaccount: function () {
      var category_id = this.get('selectedCategory');
      var category = this.store.find('category', category_id);
      this.store.find('oaccount', 2).then(function (oaccount) {
        oaccount.set('category', category);
        oaccount.save();
      });

      this.transitionToRoute('oaccounts');
    }
  }
});
