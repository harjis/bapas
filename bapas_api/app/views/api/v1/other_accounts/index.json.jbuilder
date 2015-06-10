json.oaccounts do
  json.array! @accounts do |oaccount|
    json.id oaccount.id
    json.name oaccount.name
    json.iban oaccount.iban
    json.created_at oaccount.created_at
    json.updated_at oaccount.updated_at
    json.category oaccount.category.try(:id)
  end
end

json.categories Category.all do |category|
  json.id category.id
  json.name category.name
  json.parent_id category.parent_id
  json.lft category.lft
  json.rgt category.rgt
  json.depth category.depth
  json.children_count category.children_count
end
