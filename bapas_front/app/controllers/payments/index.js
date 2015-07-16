import Ember from 'ember';

export default Ember.Controller.extend({
  page: 1,
  perPage: 10,
  queryParams: ['page', 'perPage'],

  pageBinding: 'content.page',
  perPageBinding: 'content.perPage',
  totalPagesBinding: 'content.totalPages'
});
