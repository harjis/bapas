json.cache! OtherAccount.cache_key_for_all do
  json.oaccounts do
    json.array! @accounts do |oaccount|
      json.partial! 'api/v1/other_accounts/other_account', other_account: oaccount
    end
  end

  json.meta do
    json.total_pages @accounts.total_pages
  end
end

json.categories Category.all do |category|
  json.partial! 'api/v1/categories/category', category: category
end
