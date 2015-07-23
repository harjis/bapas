class Api::V1::OtherAccountsController < ApplicationController
  def index
    # Horrible but will do for now
    if params[:filter] && params[:filter] == 'categoryless'
      @accounts = OtherAccount.categoryless
      @category = 1
    else
      @accounts = OtherAccount.all
      @category = 0
      @page     = 0
    end

    if params[:page]
      @page     = params[:page].to_i
      @accounts = @accounts.page(@page).per(10)
    end

    render 'api/v1/other_accounts/index'
  end

  def show
    @account = OtherAccount.includes(:payments).find(params[:id])

    render 'api/v1/other_accounts/show'
  end

  def update
    @account             = OtherAccount.find(params[:id])
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
