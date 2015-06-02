Rails.application.routes.draw do
  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)
  mount API::Base, at: "/"
  mount GrapeSwaggerRails::Engine, at: "/documentation"

  resources :accounts do
    resources :payments
    post 'upload', to: 'payments#upload', as: 'upload'
  end

  get 'new_payments', to: 'payments#new', as: 'new_payments'
  post 'upload', to: 'payments#upload', as: 'upload'

  root to: 'accounts#index'
end
