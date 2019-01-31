json.poll do 
  json.extract! @poll, :id, :body, :category, :user_id, :choice_ids, :user, :choices
end

if @choices
  json.choices do
    @choices.each do |choice|
      json.set! choice.id do
        json.extract! choice, :id, :body
      end
    end
  end
end
