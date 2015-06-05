json.oaccounts do
  json.array! @accounts, @accounts.first.try(:attributes)
end

