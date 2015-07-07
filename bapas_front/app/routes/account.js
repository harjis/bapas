import Ember from 'ember';

export default Ember.Route.extend({
  model: function (params) {
    var categories = this.store.find('category');
    var account = this.store.find('account', params.account_id);

    return Ember.RSVP.hash({
      account: account,
      categories: categories
    });
  },

  setupController: function (controller, model) {
    controller.setProperties(model);

    var categoryLabels = model.categories.map(function (c) {
      return c.get('name');
    });

    controller.set('categoryLabels', categoryLabels);
    controller.set('categoryData', [0, 1, 2]);
  }
});
