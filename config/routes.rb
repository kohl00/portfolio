Rails.application.routes.draw do

  get '/index' => 'pages#index'

  post '/contact_mailer' => 'pages#contact_mailer'

  root 'pages#index'


end
