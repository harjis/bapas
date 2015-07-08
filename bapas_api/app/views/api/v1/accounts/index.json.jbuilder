json.cache! Account.cache_key_for_all do
  json.accounts do
    json.array! @accounts do |account|
      json.partial! 'api/v1/accounts/account', account: account
    end
  end
end
