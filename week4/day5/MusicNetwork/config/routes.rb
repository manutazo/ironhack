Rails.application.routes.draw do
  # get '/' => 'concerts#index'
  # get '/concerts' => 'concerts#show'
  # get '/concerts/new' => 'concerts#new'
  # post '/concerts' => 'concerts#create'
  
  resources :concerts,except: [:update,:destroy] 

end
