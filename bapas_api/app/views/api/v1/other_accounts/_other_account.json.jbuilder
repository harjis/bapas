json.cache! other_account do
  json.id other_account.id
  json.name other_account.name
  json.iban other_account.iban
  json.created_at other_account.created_at
  json.updated_at other_account.updated_at
  json.payments other_account.payments.map(&:id)
  json.category other_account.category.try(:id)
end
