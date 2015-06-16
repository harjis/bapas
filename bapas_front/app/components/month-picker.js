import Ember from 'ember';

export default Ember.Component.extend({
  changeDate: "changeDate",
  didInsertElement: function () {
    var _this = this;
    this.$().fdatepicker({ startView: 1 })
      .on('changeDate', function (e) {
        _this.sendAction('changeDate', moment(e.date));
      });

    this.update();
  },
  update: function () {
    this.$().fdatepicker('update', this.get('month').toDate());
  }.observes('month')
});
