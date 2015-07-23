import Ember from 'ember';

export default Ember.Route.extend({
  model: function (params) {
    var categories = this.store.find('category');
    var oaccounts = this.store.find('oaccount');
    var account = this.store.find('account', params.account_id);

    return Ember.RSVP.hash({
      account: account,
      categories: categories,
      oaccounts: oaccounts,
    });
  },

  setupController: function (controller, models) {
    controller.setProperties(models);
  }
});
