Rails.application.routes.draw do
  get 'sessions/new'

  get 'users/new'

  resources :categoria
    get "home" => "home#home"
    get "aula" => "aula#aula"
    get "login" => "login#login"
    get "upload" => "upload#upload"
    #root :to => "login#login"
    get 'sessions/new'
    resources :users
    get    'sign_in'   => 'sessions#new'
    post   'sign_in'   => 'sessions#create'
    delete 'sign_out'  => 'sessions#destroy'
     root 'sessions#new'
     
end

