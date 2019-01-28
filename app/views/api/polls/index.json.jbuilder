
@polls.each do |poll|
  json.set! poll.id do 
    json.extract! poll, :id, :body, :user_id, :user
  end
end
