Rails.application.routes.draw do
  resources :categoria
    get "home" => "home#home"
    get "aula" => "aula#aula"
    get "login" => "login#login"
    get "upload" => "upload#upload"
    root :to => "login#login"

end