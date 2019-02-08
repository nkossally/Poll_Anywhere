
@polls.each do |poll|
  json.set! poll.id do 
    json.extract! poll, :id, :body, :user_id, :group_id, :active, :choice_ids
  end
end
