class CreateOtherAccounts < ActiveRecord::Migration
  def change
    create_table :other_accounts do |t|
      t.string :name
      t.string :iban

      t.timestamps null: false
    end
  end
end
