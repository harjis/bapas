import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

export default Router.map(function () {
  this.resource('accounts', function () {
    this.resource('account', { path: '/:account_id' });
  });
  this.resource('payments', function () {
    this.resource('payment', { path: '/:payment_id' });
  });

  this.resource('categories', function () {
    this.resource('category', { path: '/:category_id' });
  });
});
