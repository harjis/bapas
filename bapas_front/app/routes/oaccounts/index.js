import Ember from 'ember';
import RouteMixin from 'ember-cli-pagination/remote/route-mixin';

export default Ember.Route.extend(RouteMixin, {
  model: function (params) {
    var oaccounts = this.findPaged('oaccount', params);
    var categories = this.store.find('category');

    //TODO why do we have to reutnr oaccounts under content key?
    return Ember.RSVP.hash({
      categories: categories,
      content: oaccounts,
    });
  },

  setupController: function (controller, models) {
    controller.setProperties(models);
  }
});
