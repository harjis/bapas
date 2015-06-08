import Ember from 'ember';

export default Ember.Route.extend({
  model: function () {
    return Ember.RSVP.hash({
      categories: this.store.find('category')
    });
  },
  setupController: function (controller, models) {
    controller.setProperties(models);
  }
});
