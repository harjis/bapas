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

  setupController: function (controller, model) {
    controller.setProperties(model);

    var categoryIds = [];
    var categoryLabels = model.categories.map(function (c) {
      categoryIds.push(c.get('id'));
      return c.get('name');
    });

    var categoryData = {};
    $.each(categoryIds, function (_, categoryId) {
      categoryData[categoryId] = 0;
      model.account.get('payments').forEach(function (payment) {
        var currentCategoryId = payment.get('oaccount').get('category').get('id');
        var amount = Math.abs(parseFloat(payment.get('amount')));

        if (currentCategoryId === categoryId) {
          categoryData[categoryId] += amount;
        }
      });
    });

    var keys = Object.keys(categoryData);
    categoryData = keys.map(function (v) {
      return categoryData[v];
    });

    controller.set('categoryLabels', categoryLabels);
    controller.set('categoryData', categoryData);
  }
});
