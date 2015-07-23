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
  categoryLabels: function () {
    var datas = this.get('report').get('report_data');
    var result = [];
    datas.forEach(function (data) {
      result.push(data.category_name);
    });

    return result;
  },
  categoryIds: function () {
    return this.get('categories').map(function (category) {
      return category.get('id');
    });
  },
  categoryData: function () {
    var datas = this.get('report').get('report_data');
    var result = [];
    datas.forEach(function (data) {
      result.push(Math.abs(parseFloat(data.amount)));
    });

    return result;
  },
  data: function () {
    return {
      labels: this.categoryLabels(),
      datasets: [
        {
          fillColor: "rgba(151,187,205,0.2)",
          strokeColor: "rgba(151,187,205,1)",
          pointColor: "rgba(151,187,205,1)",
          pointStrokeColor: "#fff",
          pointHighlightFill: "#fff",
          pointHighlightStroke: "rgba(151,187,205,1)",
          data: this.categoryData()
        }
      ]
    };
  }.property('date')
});
