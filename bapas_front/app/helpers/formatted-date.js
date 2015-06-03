/* global moment:true */

import Ember from 'ember';

export default Ember.Handlebars.makeBoundHelper(function (date) {
  var format = 'DD.MM.YYYY HH:mm:ss';
  return moment(date).format(format);
});
