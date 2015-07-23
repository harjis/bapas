import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['page', 'perPage', 'filter'],

  pageBinding: 'oaccounts.page',
  perPageBinding: 'oaccounts.perPage',
  totalPagesBinding: 'oaccounts.totalPages',

  page: 1,
  perPage: 10,

  actions: {
    saveOaccount: function (oaccount, selectedCategory) {
      this.store.find('oaccount', oaccount.id).then(function (oaccount) {
        oaccount.set('category', selectedCategory);
        oaccount.save();
      });
    },
  }
});
