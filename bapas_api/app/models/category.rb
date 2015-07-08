class Category < BaseModel
  has_many :other_accounts
  
  acts_as_nested_set
end
