json.children children do |child|
  json.id child.id
  json.name child.name
  json.partial! 'api/v1/categories/children', children: child.children
end
