class AddCategoryToOtherAccounts < ActiveRecord::Migration
  def change
    add_reference :other_accounts, :category, index: true, foreign_key: true
  end
end
