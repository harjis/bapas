class Api::V1::PaymentsController < ApplicationController
  def index
    if params[:page]
      @page     = params[:page].to_i
      @payments = Payment.page(@page).per(10)
    else
      @page     = 0
      @payments = Payment.all
    end

    render 'api/v1/payments/index'
  end

  def show
    @payment = Payment.find(params[:id])

    render 'api/v1/payments/show'
  end
end
