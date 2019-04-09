Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :index, :show]
    resource :session, only: [:create, :destroy, :show]
    resources :polls, only: [:create, :destroy, :show, :index, :update]
    resources :choices, only: [:create, :destroy, :show, :index]
    resources :groups, only: [:create, :destroy, :show, :update, :index]
    resources :responses, only: [:create, :destroy, :show, :index]


  end

  root "static_pages#root"
end
