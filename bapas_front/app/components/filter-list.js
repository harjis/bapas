import Ember from 'ember';

export default Ember.Component.extend({
  click: function (event) {
    var el = Ember.$(event.target);

    if (el.is('a')) {
      var dd = $(el.parent()[0]);
      var dl = dd.parent();
      dl.children('dd').removeClass('active');
      dd.addClass('active');
    }
  }
});
