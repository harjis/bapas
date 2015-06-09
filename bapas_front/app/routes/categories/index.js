import Ember from 'ember';

export default Ember.Route.extend({
  model: function () {
    return this.store.find('category');
  },
  setupController: function (controller, models) {
    controller.setProperties(models);
  }
});
