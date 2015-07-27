import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

export default Router.map(function () {
  this.route('accounts', function () {

  });
  this.route('account', { path: 'accounts/:account_id' });

  this.route('report', { path: 'reports/:report_id' });

  this.resource('payments', function () {
    this.resource('payment', { path: '/:payment_id' });
  });

  this.route('categories', function () {
  });
  this.route('oaccounts', function () {
  });
  this.route('oaccount', { path: '/oaccounts/:oaccount_id' });
});
