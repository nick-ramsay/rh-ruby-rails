Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root to: 'orders#index'
  
  get '/orders' => 'orders#find_orders'
  get '/statuses' => 'orders#find_statuses'
end
