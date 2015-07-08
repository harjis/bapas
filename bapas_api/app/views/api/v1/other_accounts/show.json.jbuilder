json.oaccount do
  json.partial! 'api/v1/other_accounts/other_account', other_account: @account
end

json.cache! Payment.cache_key_for_all do
  json.payments @account.payments do |payment|
    json.partial! 'api/v1/payments/payment', payment: payment
  end
end

json.categories Category.all do |category|
  json.partial! 'api/v1/categories/category', category: category
end
