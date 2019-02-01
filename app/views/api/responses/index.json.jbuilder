@responses.each do |response|
  json.set! response.id do 
    json.extract! response, :id, :user_id, :choice_id
  end
end