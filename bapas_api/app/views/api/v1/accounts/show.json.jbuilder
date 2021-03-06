json.account do
  json.partial! 'api/v1/accounts/account', account: @account
end

json.cache! Payment.cache_key_for_all do
  json.payments @account.payments do |payment|
    json.partial! 'api/v1/payments/payment', payment: payment
  end
end

json.cache! OtherAccount.cache_key_for_all do
  json.oaccounts OtherAccount.all do |other_account|
    json.partial! 'api/v1/other_accounts/other_account', other_account: other_account
  end
end
