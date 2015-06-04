json.other_account do
  json.id @account.id
  json.name @account.name
  json.iban @account.iban
  json.created_at @account.created_at
  json.updated_at @account.updated_at
  json.payments @account.payments.map(&:id)
end
