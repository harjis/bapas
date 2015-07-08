json.cache! Payment.cache_key_for_all do
  json.payments do
    json.array! @payments do |payment|
      json.partial! 'api/v1/payments/payment', payment: payment
    end
  end
end

json.cache! Account.cache_key_for_all do
  json.accounts Account.all do |account|
    json.id account.id
    json.name account.name
    json.iban account.iban
    json.created_at account.created_at
    json.updated_at account.updated_at
  end
end

json.cache! OtherAccount.cache_key_for_all do
  json.oaccounts OtherAccount.all do |account|
    json.id account.id
    json.name account.name
    json.iban account.iban
    json.created_at account.created_at
    json.updated_at account.updated_at
  end
end
