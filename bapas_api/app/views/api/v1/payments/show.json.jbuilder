json.payment do
  json.partial! 'api/v1/payments/payment', payment: @payment
end

json.accounts Account.all do |account|
  json.partial! 'api/v1/accounts/account', account: account
end

json.oaccounts OtherAccount.all do |other_account|
  json.partial! 'api/v1/other_accounts/other_account', other_account: other_account
end
