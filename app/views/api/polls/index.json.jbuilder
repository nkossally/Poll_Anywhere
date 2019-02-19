
@polls.each do |poll|
  json.set! poll.id do 
    json.extract! poll, :id, :body, :group_id, :active, :choice_ids
  end
end
