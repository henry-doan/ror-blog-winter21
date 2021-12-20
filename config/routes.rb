Rails.application.routes.draw do
  # no root route just in the namespace and resources
  # api routes, leads us to the controller
  namespace :api do
    resources :blogs do
      resources :posts
    end

    resources :posts, except: [:index, :show, :create, :update, :destroy] do
      resources :comments
    end

  end

end
