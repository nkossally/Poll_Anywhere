@choices.each do |choice|
  json.set! choice.id do 
    json.extract! choice, :id, :body, :poll_id, :responses, :response_ids
  end
end