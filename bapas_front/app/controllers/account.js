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
      this.get('account').get('payments').forEach(function (payment) {
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
  }.property()
});
