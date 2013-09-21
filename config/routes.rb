Maps::Application.routes.draw do
  resources :spots
 
  root to: "welcome#index"
end
