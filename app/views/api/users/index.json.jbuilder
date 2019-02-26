@users.each do |user|
  json.set! user.id do 
    json.extract! user, :id, :username, :first_name, :last_name, :group_ids
  end
end