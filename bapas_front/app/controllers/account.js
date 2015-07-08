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
  filteredPayments: function () {
    var that = this;
    return this.get('account').get('payments').filter(function (payment) {
      var isYearSame = moment(payment.get('entry_date')).isSame(that.get('date'), 'year');
      var isMonthSame = moment(payment.get('entry_date')).isSame(that.get('date'), 'month');

      return (isYearSame && isMonthSame);
    });
  },
  categoryLabels: function () {
    return this.get('categories').map(function (category) {
      return category.get('name');
    });
  },
  categoryIds: function () {
    return this.get('categories').map(function (category) {
      return category.get('id');
    });
  },
  categoryData: function () {
    var categoryData = {};
    for (var i in this.categoryIds()) {
      var categoryId = this.categoryIds()[i];
      categoryData[categoryId] = 0;
      this.filteredPayments().forEach(function (payment) {
        var currentCategoryId = payment.get('oaccount').get('category').get('id');
        var amount = Math.abs(parseFloat(payment.get('amount')));

        if (currentCategoryId === categoryId) {
          categoryData[categoryId] += amount;
        }
      });
    }

    var categoryIds = Object.keys(categoryData);
    return categoryIds.map(function (categoryId) {
      return categoryData[categoryId];
    });
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
