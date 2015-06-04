class Api::V1::OtherAccountsController < ApplicationController
  def index
    @accounts = OtherAccount.all

    render 'api/v1/other_accounts/index'
  end

  def show
    @account = OtherAccount.includes(:payments).find(params[:id])

    render 'api/v1/other_accounts/show'
  end
end
