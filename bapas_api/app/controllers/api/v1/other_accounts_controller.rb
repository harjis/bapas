class Api::V1::OtherAccountsController < ApplicationController
  def index
    @accounts = OtherAccount.all

    render 'api/v1/other_accounts/index'
  end

  def show
    @account = OtherAccount.includes(:payments).find(params[:id])

    render 'api/v1/other_accounts/show'
  end

  def update
    @account = OtherAccount.find(params[:id])
    @account.category_id = params[:oaccount][:category]
    if @account.save
      render status: 200, json: {}
    else
      render status: 500, json: {}
    end
  end

  private

  def other_account_params
    params.require(:oaccount).permit(:category)
  end
end
