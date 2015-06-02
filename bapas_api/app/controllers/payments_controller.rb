class PaymentsController < ApplicationController
  include PaymentsHelper

  def index
    account = Account.find params[:account_id]
    @payments = account.payments
  end

  def upload
    filepath = write_on_disc params[:payment_batch]

    batch = PaymentBatchParser.new filepath
    batch.parse

    redirect_to account_payments_path(batch.account)
  end

  private

  def payment_params
    params.permit(:account_id, :payment_batch)
  end
end
