@users.each do |user|
  json.set! user.id do 
    json.extract! user, :id, :groups
end