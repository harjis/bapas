import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    saveOaccount: function (oaccount, selectedCategory) {
      this.store.find('oaccount', oaccount.id).then(function (oaccount) {
        oaccount.set('category', selectedCategory);
        oaccount.save();
      });
    },
  }
});
