json.report do
  json.id 1
  json.date @date.to_s
  json.report_data do
    json.array! @payments_by_category do |payment_sum|
      json.category_id payment_sum.category_id
      json.category_name @categories.find(payment_sum.category_id).name
      json.amount payment_sum.sum_amount
    end
  end
end
