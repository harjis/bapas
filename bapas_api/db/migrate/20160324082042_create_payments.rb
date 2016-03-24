class CreatePayments < ActiveRecord::Migration
  def change
    create_table "payments", force: :cascade do |t|
      t.integer  "account_id",       limit: 4
      t.integer  "other_account_id", limit: 4
      t.date     "entry_date"
      t.date     "value_date"
      t.date     "payment_date"
      t.decimal  "amount",                         precision: 10, scale: 2
      t.string   "bic",              limit: 255
      t.string   "action",           limit: 255
      t.text     "reference",        limit: 65535
      t.text     "message",          limit: 65535
      t.string   "card_number",      limit: 255
      t.datetime "created_at"
      t.datetime "updated_at"
    end

    add_index "payments", ["account_id"], name: "index_payments_on_account_id", using: :btree
    add_index "payments", ["other_account_id"], name: "index_payments_on_other_account_id", using: :btree

  end
end
