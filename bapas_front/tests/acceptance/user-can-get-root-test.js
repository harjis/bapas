import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from 'bapas-front/tests/helpers/start-app';

var application;

module('Acceptance | user can get root', {
  beforeEach: function() {
    application = startApp();
  },

  afterEach: function() {
    Ember.run(application, 'destroy');
  }
});

test('visiting /', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(currentURL(), '');
    assert.equal(currentPath(), 'index');
  });
});
