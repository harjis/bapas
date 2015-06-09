import Ember from 'ember';

export default Ember.Component.extend({
  selectCategory: "selectCategory",
  filterBy: 'roots',
  filters: {
    all: function () {
      return true;
    },
    roots: function (category) {
      return category.get('depth') === 0;
    }
  },
  filteredList: function () {
    var filterFunction = null;
    if (this.get('root')) {
      filterFunction = this.filters['roots'];
    }
    else {
      filterFunction = this.filters['all'];
    }
    return this.get('list').filter(filterFunction);
  }.property('list', 'filterBy'),
  actions: {
    selectCategory: function (category) {
      console.log('component selectCategory');
      this.sendAction('selectCategory', category);
    }
  }
});
