Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root to: 'orders#index'
  get '/orders' => 'orders#find_orders'
  get '/agencies' => 'orders#find_agencies'
  get '/campaigns' => 'orders#find_campaigns'
  get '/campaign' => 'orders#find_campaign'
  get '/order-items' => 'orders#find_orders'
end
