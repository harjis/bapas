# Add updated_at column to Category so we can cache it
# json.cache! Category.cache_key_for_all do

json.categories do
  json.array! @categories do |category|
    json.id category.id
    json.name category.name
    json.depth category.depth
    json.children_count category.children_count
    json.parent category.parent.try(:id)
    json.children category.children.map(&:id)
  end
end
