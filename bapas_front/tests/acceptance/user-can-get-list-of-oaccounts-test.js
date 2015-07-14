import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from 'bapas-front/tests/helpers/start-app';

var application;

module('Acceptance | user can get list of oaccounts', {
  beforeEach: function() {
    application = startApp();
  },

  afterEach: function() {
    Ember.run(application, 'destroy');
  }
});

test('visiting /user-can-get-list-of-oaccounts', function(assert) {
  assert.expect(2);
  visit('/oaccounts');

  andThen(function() {
    assert.equal(currentURL(), '/oaccounts');
    assert.equal(find('table.oaccounts tbody:tr:td:first').text(), 'ALEPA');
  });
});
