import Ember from 'ember';

export default Ember.Route.extend({
  model: function (params) {
    return Ember.RSVP.hash({
      account: this.store.find('account', params.account_id),
      categories: this.store.find('category')
    });
  },

  setupController: function (controller, model) {
    model.account.reload();
    controller.set('model', model.account);

    var categoryLabels = model.categories.map(function (c) {
      return c.get('name');
    });

    controller.set('categoryLabels', categoryLabels);
    controller.set('categoryData', [0,1,2]);
  }
});
