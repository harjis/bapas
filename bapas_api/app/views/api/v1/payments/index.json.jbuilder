json.payments do
  json.array! @payments do |payment|
    json.id payment.id
    json.account payment.account_id
    json.oaccount payment.other_account_id
    json.entry_date payment.entry_date
    json.value_date payment.value_date
    json.payment_date payment.payment_date
    json.amount payment.amount
    json.bic payment.bic
    json.action payment.action
    json.reference payment.reference
    json.message payment.message
    json.card_number payment.card_number
    json.created_at payment.created_at
    json.updated_at payment.updated_at
  end
end

json.account Account.all do |account|
  json.id account.id
  json.name account.name
  json.iban account.iban
  json.created_at account.created_at
  json.updated_at account.updated_at
end

json.oaccount OtherAccount.all do |account|
  json.id account.id
  json.name account.name
  json.iban account.iban
  json.created_at account.created_at
  json.updated_at account.updated_at
end
