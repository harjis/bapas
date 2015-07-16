import Ember from 'ember';
import RouteMixin from 'ember-cli-pagination/remote/route-mixin';

export default Ember.Route.extend(RouteMixin, {
  perPage: 10,
  model: function (params) {
    var oaccounts = this.findPaged('oaccount', params);
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
