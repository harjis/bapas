class AccountSerializer < ActiveModel::Serializer
  attributes :id, :name, :iban, :created_at, :updated_at
end
