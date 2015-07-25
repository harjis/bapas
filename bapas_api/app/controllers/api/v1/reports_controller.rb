class Api::V1::ReportsController < ApplicationController
  def show
    @date = Date.parse params[:date]
    @negative_payments = Payment.joins(:other_account).where(account_id: 1)
    @negative_payments = @negative_payments.where('amount < 0')
    @negative_payments = @negative_payments.where('extract(year from entry_date) = ?', @date.year)
    @negative_payments = @negative_payments.where('extract(month from entry_date) = ?', @date.month)
    @negative_payments = @negative_payments.select('other_accounts.category_id, SUM(payments.amount) AS sum_amount')
    @negative_payments = @negative_payments.group('other_accounts.category_id')

    @positive_payments = Payment.joins(:other_account).where(account_id: 1)
    @positive_payments = @positive_payments.where('amount >= 0')
    @positive_payments = @positive_payments.where('extract(year from entry_date) = ?', @date.year)
    @positive_payments = @positive_payments.where('extract(month from entry_date) = ?', @date.month)
    @positive_payments = @positive_payments.select('other_accounts.category_id, SUM(payments.amount) AS sum_amount')
    @positive_payments = @positive_payments.group('other_accounts.category_id')
    @categories = Category.all

    render 'api/v1/reports/show'
  end
end
