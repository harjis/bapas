import Ember from 'ember';

export default Ember.Route.extend({
  model: function (params) {
    var date = moment(params.report_id);
    var report = this.store.find('report', date.format('YYYY-MM-DD'));

    return Ember.RSVP.hash({
      report: report,
      date: date,
    });
  },

  setupController: function (controller, model) {
    controller.setProperties(model);
  },
  actions: {
    loading: function () {
      //Do not bubble the loading to the applicationroute
      return false;
    }
  }
});
