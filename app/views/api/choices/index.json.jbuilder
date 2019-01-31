@choices.each do |choice|
  json.set! choice.id do 
    json.extract! choice, :id, :body, :poll_id
  end
end