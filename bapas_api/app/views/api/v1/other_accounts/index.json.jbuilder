json.cache! OtherAccount.cache_key_for_all + @page.to_s + @category.to_s do
  json.oaccounts do
    json.array! @accounts do |oaccount|
      json.partial! 'api/v1/other_accounts/other_account', other_account: oaccount
    end
  end

  if @page > 0
    json.meta do
      json.total_pages @accounts.total_pages
    end
  end
end

json.categories Category.all do |category|
  json.partial! 'api/v1/categories/category', category: category
end
