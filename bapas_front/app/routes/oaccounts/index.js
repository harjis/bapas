import Ember from 'ember';

export default Ember.Route.extend({
  model: function () {
    var oaccounts = this.store.find('oaccount');
    var categories = this.store.find('category');

    return Ember.RSVP.hash({
      categories: categories,
      oaccounts: oaccounts,
    });
  },

  setupController: function (controller, model) {
    controller.setProperties(model);
  }
});
