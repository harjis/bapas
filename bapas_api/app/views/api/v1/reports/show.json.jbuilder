json.report do
  json.id @date.strftime('%Y-%m-%d')
  json.report_data do
    json.array! @payments_by_category do |payment_sum|
      if payment_sum.category_id
        json.category_id payment_sum.category_id
        json.category_name @categories.find(payment_sum.category_id).name
      else
        json.category_id 0
        json.category_name '*not categorized*'
      end

      json.amount payment_sum.sum_amount
    end
  end
end
