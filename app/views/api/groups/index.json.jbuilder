@groups.each do |group|
  json.set! group.id do 
    json.extract! group, :id, :title, :user_id, :poll_ids
  end
end