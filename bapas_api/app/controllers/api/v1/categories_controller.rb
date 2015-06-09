class Api::V1::CategoriesController < ApplicationController
  def index
    @categories = Category.all

    render 'api/v1/categories/index'
  end

  def show
    @category = Category.find(params[:id])

    render 'api/v1/categories/show'
  end

  def create
    @category = Category.create(category_params)
    @category.parent_id = params[:category][:parent]

    if @category.save
      render 'api/v1/categories/show'
    else
      # Figure out what to do
    end
  end

  def destroy
    @category = Category.find(params[:id])

    @category.destroy

    render status: 200, json: {}
  end

  private

  def category_params
    params.require(:category).permit(:name, :parent_id)
  end
end
