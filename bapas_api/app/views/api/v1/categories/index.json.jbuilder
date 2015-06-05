json.categories do
  json.array! @categories, @categories.first.attributes
end
