class CreateAccounts < ActiveRecord::Migration
  def change
    create_table "accounts", force: :cascade do |t|
      t.string   "name",       limit: 255
      t.string   "iban",       limit: 255
      t.datetime "created_at"
      t.datetime "updated_at"
    end
  end
end
