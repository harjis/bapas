import DS from 'ember-data';

export default DS.Model.extend({
  date: function () {
    return moment(this.get('id'));
  }.property('model'),
  report_data: DS.attr()
});
