json.categories do
  json.array! @categories, @categories.first.try(:attributes)
end
