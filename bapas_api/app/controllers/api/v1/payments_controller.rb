class Api::V1::PaymentsController < ApplicationController
  def index
    @payments = Payment.all

    render 'api/v1/payments/index'
  end

  def show
    @payment = Payment.find(params[:id])

    render 'api/v1/payments/show'
  end
end
