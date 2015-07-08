# Add updated_at column to Category so we can cache it
# json.cache! Category.cache_key_for_all do

json.categories do
  json.array! @categories do |category|
    json.partial! 'api/v1/categories/category', category: category
  end
end
