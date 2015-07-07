import Ember from 'ember';

export default Ember.Controller.extend({
  date: moment(),
  title: function () {
    return this.get('date').format('MMMM YYYY');
  }.property('date'),
  actions: {
    changeDate: function (date) {
      this.set('date', date);
    }
  },
  data: function () {
    return {
      labels: this.get('categoryLabels'),
      datasets: [
        {
          label: "My Second dataset",
          fillColor: "rgba(151,187,205,0.2)",
          strokeColor: "rgba(151,187,205,1)",
          pointColor: "rgba(151,187,205,1)",
          pointStrokeColor: "#fff",
          pointHighlightFill: "#fff",
          pointHighlightStroke: "rgba(151,187,205,1)",
          data: this.get('categoryData')
        }
      ]
    };
  }.property()
});
