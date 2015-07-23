json.report do
  json.date @date.to_s
  json.data do
    json.array! @payments_by_category do |payment_sum|
      json.category_id payment_sum.category_id
      json.amount payment_sum.sum_amount
    end
  end
end
