import Ember from 'ember';

export default Ember.Controller.extend({
  page: 1,
  perPage: 10,
  queryParams: ['page', 'perPage'],

  // binding the property on the paged array
  // to the query params on the controller
  pageBinding: 'content.page',
  perPageBinding: 'content.perPage',
  totalPagesBinding: 'content.totalPages',

  actions: {
    saveOaccount: function (oaccount, selectedCategory) {
      this.store.find('oaccount', oaccount.id).then(function (oaccount) {
        oaccount.set('category', selectedCategory);
        oaccount.save();
      });
    },
  }
});
