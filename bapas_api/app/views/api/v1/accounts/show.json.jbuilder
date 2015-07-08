json.cache! @account do
  json.account do
    json.partial! 'api/v1/accounts/account', account: @account
  end
  json.payments @account.payments do |payment|
    json.partial! 'api/v1/payments/payment', payment: payment
  end
  json.oaccount OtherAccount.all do |other_account|
    json.partial! 'api/v1/other_accounts/other_account', other_account: other_account
  end
end
