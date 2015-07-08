json.oaccount do
  json.partial! 'api/v1/other_accounts/other_account', other_account: @account
end

json.payments @account.payments do |payment|
  json.partial! 'api/v1/payments/payment', payment: payment
end

json.categories Category.all do |category|
  json.partial! 'api/v1/categories/category', category: category
end
