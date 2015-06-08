json.categories do
  json.id @root.id
  json.name @root.name
  json.partial! 'api/v1/categories/children.json.jbuilder', children: @root.children
end
