import Ember from 'ember';

export default Ember.Component.extend({
  selectCategory: "selectCategory",
  destroyCategory: "destroyCategory",
  filterBy: 'roots',
  filters: {
    all: function () {
      return true;
    },
    roots: function (category) {
      return category.get('root');
    }
  },
  filteredList: function () {
    if (this.get('root')) {
      return this.get("category").filter(this.filters['roots']);
    }
    else {
      return this.get("category").get('children').filter(this.filters['all']);
    }
  }.property('category.children'),
  actions: {
    selectCategory: function (category) {
      this.sendAction('selectCategory', category);
    },
    destroyCategory: function (category) {
      this.sendAction('destroyCategory', category);
    }
  }
});
