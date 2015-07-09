import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveOaccount: function (oaccount) {
      this.sendAction('saveOaccount', oaccount);
    }
  }
});
