class Api::V1::AccountsController < ApplicationController
  def index
    @accounts = Account.all

    render 'api/v1/accounts/index'
  end

  def show
    @account = Account.includes(:payments).find(params[:id])

    render 'api/v1/accounts/show'
  end
end
