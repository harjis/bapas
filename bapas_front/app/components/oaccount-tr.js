import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'tr',
  saveOaccount: "saveOaccount",
  actions: {
    saveOaccount: function (oaccount) {
      this.sendAction('saveOaccount', oaccount, this.get('selectedCategory'));
    }
  }
});
