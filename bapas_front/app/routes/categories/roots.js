import Ember from 'ember';

export default Ember.Route.extend({
  model: function () {
    return this.store.filter('category', function (category) {
      return (category.get('depth') === 0);
    });
  },
  renderTemplate: function (controller) {
    this.render('categories/index', { controller: controller });
  }
});
