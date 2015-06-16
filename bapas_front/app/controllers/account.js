import Ember from 'ember';

export default Ember.Controller.extend({
  date: moment(),
  title: function () {
    return this.get('date').format('MMMM YYYY');
  }.property('date'),

  actions: {
    changeDate: function (date) {
      this.set('date', date);
    }
  }
});
