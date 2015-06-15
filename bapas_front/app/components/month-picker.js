import Ember from 'ember';

export default Ember.Component.extend({
  didInsertElement: function () {
    var _this = this;
    this.$().fdatepicker({ format: 'M-yyyy', minViewMode: 'months' })
      .on('changeDate', function (e) {
        _this.sendAction('action', e.format());
      });

    this.update();
  },
  update: function () {
    if (this.get('month')) {
      this.$().fdatepicker('update', this.get('month').toDate());
    }
    else {
      this.$('.month.active').removeClass('active');
    }
  }.observes('month')
});
