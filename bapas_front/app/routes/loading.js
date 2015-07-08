import Ember from 'ember';

export default Ember.Route.extend({
  renderTemplate: function () {
    if (this.controllerFor('application').get('currentPath')) {
      this.render('loading', {
        into: 'application',
        outlet: 'loading'
      });
    }
  }
});
