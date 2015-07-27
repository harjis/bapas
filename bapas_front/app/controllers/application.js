import Ember from 'ember';

export default Ember.Controller.extend({
  now: moment().format('YYYY-MM-DD')
});
