import Ember from 'ember';
import pagedArray from 'ember-cli-pagination/computed/paged-array';

export default Ember.Controller.extend({
  queryParams: ['page', 'perPage', 'filter'],

  page: 1,
  perPage: 10,
  filter: '',

  pagedContent: pagedArray("filteredContent", {
    pageBinding: "page",
    perPageBinding: "perPage",
    totalPagesBinding: 'model.totalPages',
  }),

  //TODO
  // I do not get this. Why do I have to return Ember.ArrayProxy. And why routes model has to have content key in it.
  // And why this has to be arrangedContent?
  arrangedContent: function () {
    return Ember.ArrayProxy.create({
      content: this.get('model')
    });
  }.property('model'),

  filteredContent: function () {
    var filter = this.get('filter');
    var oaccounts = this.get('arrangedContent');

    if (filter && filter === 'categoryless') {
      return oaccounts.filter(function (oaccount) {
        return !oaccount.get('hasCategory');
      });
    }
    else {
      return oaccounts;
    }
  }.property('arrangedContent.@each.hasCategory', 'filter'),

  actions: {
    saveOaccount: function (oaccount, selectedCategory) {
      this.store.find('oaccount', oaccount.id).then(function (oaccount) {
        oaccount.set('category', selectedCategory);
        oaccount.save();
      });
    },
  }
});
