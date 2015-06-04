json.accounts do
  json.array! @accounts, @accounts.first.attributes
end

