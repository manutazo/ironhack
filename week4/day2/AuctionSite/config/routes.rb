Rails.application.routes.draw do
  get '/' => 'users#index'
  get '/users/:id' => 'users#show'
  get '/users/new' => 'users#new'
  post '/users' => 'users#create'

end
