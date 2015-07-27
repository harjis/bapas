import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from 'bapas-front/tests/helpers/start-app';

var application;

module('Acceptance | user can get reports', {
  beforeEach: function() {
    application = startApp();
  },

  afterEach: function() {
    Ember.run(application, 'destroy');
  }
});

test('visiting /reports', function(assert) {
  visit('/reports/2015-01-01');

  andThen(function() {
    assert.equal(currentPath(), 'report');

    assert.equal(find('div.content-wrapper h1:first').text(), 'January 2015');
    assert.equal(find('div.content-wrapper h1:last').text(), 'Income: 1628€');
  });
});
