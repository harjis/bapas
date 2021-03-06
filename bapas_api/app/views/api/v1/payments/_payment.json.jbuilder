json.cache! payment do
  json.id payment.id
  json.account payment.account_id
  json.other_account payment.other_account_id
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
