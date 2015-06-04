json.payments do
  json.array! @payments, @payments.first.attributes
end

