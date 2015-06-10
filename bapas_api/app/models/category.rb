class Category < ActiveRecord::Base
  has_many :other_accounts
  
  acts_as_nested_set
end
