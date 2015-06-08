class Api::V1::CategoriesController < ApplicationController
  def index
    @root = Category.root

    render 'api/v1/categories/index'
  end

  def show
    @category = Category.find(params[:id])

    render 'api/v1/categories/show'
  end

  def create
    @category = Category.create(category_params)

    if @category.save
      render 'api/v1/categories/show'
    else
      # Figure out what to do
    end
  end

  private

  def category_params
    params.require(:category).permit(:name, :parent_id)
  end
end
