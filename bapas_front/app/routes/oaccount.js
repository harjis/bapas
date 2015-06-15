import Ember from 'ember';

export default Ember.Route.extend({
  setupController: function (controller, model) {
    controller.set('model', model);
    controller.set('categories', this.store.find('category'));
    controller.set('selectedCategory', model.get('category'));
  }
});
