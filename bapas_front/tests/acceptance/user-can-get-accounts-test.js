import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from 'bapas-front/tests/helpers/start-app';

var application;

module('Acceptance | user can get accounts', {
  beforeEach: function() {
    application = startApp();
  },

  afterEach: function() {
    Ember.run(application, 'destroy');
  }
});

test('visiting /accounts', function(assert) {
  visit('/accounts');

  andThen(function() {
    assert.equal(currentURL(), '/accounts');
  });
});
