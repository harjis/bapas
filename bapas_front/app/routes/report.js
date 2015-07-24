import Ember from 'ember';

export default Ember.Route.extend({
  model: function (params) {
    var report = this.store.find('report', moment(params.report_id).format('YYYY-MM-DD'));

    return Ember.RSVP.hash({
      report: report,
    });
  },

  setupController: function (controller, model) {
    controller.setProperties(model);
  }
});
