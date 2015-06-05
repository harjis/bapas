class Api::V1::CategoriesController < ApplicationController
  def index
    @categories = Category.all

    render 'api/v1/categories/index'
  end

  def show
    @category = Category.find(params[:id])

    render 'api/v1/categories/show'
  end
end
