import Ember from 'ember';

export default Ember.Controller.extend({
  title: function () {
    return this.get('date').format('MMMM YYYY');
  }.property('date'),
  actions: {
    changeDate: function (date) {
      this.transitionToRoute('report', date.format('YYYY-MM-DD'));
    }
  },
  categoryLabels: function () {
    var datas = this.get('report').get('negative_payments');
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
    var datas = this.get('report').get('negative_payments');
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
  }.property('date'),
  totalOutcome: function () {
    var datas = this.get('report').get('negative_payments');
    var totalAmount = 0;
    datas.forEach(function (data) {
      totalAmount += Math.abs(parseFloat(data.amount));
    });

    return totalAmount.toFixed(0);
  }.property('report'),
  totalIncome: function () {
    var datas = this.get('report').get('positive_payments');
    var totalAmount = 0;
    datas.forEach(function (data) {
      totalAmount += Math.abs(parseFloat(data.amount));
    });

    return totalAmount.toFixed(0);
  }.property('report'),
  positive_payments: function () {
    return this.get('report').get('positive_payments');
  }.property('report')
});
