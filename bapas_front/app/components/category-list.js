import Ember from 'ember';

export default Ember.Component.extend({
  filterBy: 'roots',
  filters: {
    roots: function (category) {
      return category.get('depth') === 0;
    }
  },
  filteredList: function () {
    var filterFunction = this.filters[this.get('filterBy')];
    return this.get('list').filter(filterFunction);
  }.property('list', 'filterBy'),
  actions: {
    selectCategory: function (category) {
      this.sendAction('selectedCategory', category);
    }
  }
});
