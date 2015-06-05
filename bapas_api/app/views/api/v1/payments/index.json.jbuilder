json.payments do
  json.array! @payments, @payments.first.try(:attributes)
end

