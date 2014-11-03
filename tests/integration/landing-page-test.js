import Ember from 'ember';
import startApp from 'bostonember/tests/helpers/start-app';
import Ember from 'ember';

var App;

module('Integration - Landing Page', {
  setup: function() {
    App = startApp();
         },
  teardown: function() {
              Ember.run(App, 'destroy');
            }
});

test('Should welcome me to Ember', function() {
  visit('/').then(function() {
    equal(find('h2#title').text(), 'Welcome to Boston Ember');
  });
});

test('Should Allow navigation back to root from another page', function() {
  visit('/about').then(function() {
    click('a:contains("Home")').then(function() {
    equal(find('h2#title').text(), 'Welcome to Boston Ember');
    });
  });
});
