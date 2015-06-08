json.categories do
  json.array! @categories do |category|
    json.id category.id
    json.name category.name
    json.depth category.depth
    json.children category.children.map(&:id)
  end
end
