class Api::V1::ReportsController < ApplicationController
  def show
    @date = Date.parse params[:date]
    @payments = Payment.joins(:other_account).where(account_id: 1)
    @payments = @payments.where('extract(year from entry_date) = ?', @date.year)
    @payments = @payments.where('extract(month from entry_date) = ?', @date.month)
    @payments = @payments.select('other_accounts.category_id, SUM(payments.amount) AS sum_amount')
    @payments_by_category = @payments.group('other_accounts.category_id')
    @categories = Category.all

    render 'api/v1/reports/show'
  end
end
