import Ember from 'ember';

export default Ember.Controller.extend({
  selectedCategory: function () {
    if (this.get('model').get('category') === null) {
      return this.store.find('category').get('firstObject');
    }
    else {
      return this.get('model').get('category');
    }
  }.property(),
  actions: {
    saveOaccount: function (oaccount) {
      var that = this;
      var category = this.get('selectedCategory');
      this.store.find('oaccount', oaccount.id).then(function (oaccount) {
        oaccount.set('category', category);
        oaccount.save().then(function () {
          that.transitionToRoute('oaccounts');
        });
      });
    }
  }
});
