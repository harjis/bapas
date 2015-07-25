json.report do
  json.id @date.strftime('%Y-%m-%d')
  json.negative_payments do
    json.array! @negative_payments do |payment_sum|
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
  json.positive_payments do
    json.array! @positive_payments do |payment_sum|
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
