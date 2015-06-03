Rails.application.routes.draw do
  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)
  mount API::Base, at: "/grape_api"

  namespace :api, defaults: { format: :json }, format: false do
    namespace :v1 do
      resources :accounts
    end
  end

  resources :accounts do
    resources :payments
    post 'upload', to: 'payments#upload', as: 'upload'
  end

  get 'new_payments', to: 'payments#new', as: 'new_payments'
  post 'upload', to: 'payments#upload', as: 'upload'

  root to: 'accounts#index'
end
