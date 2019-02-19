json.poll do 
  json.extract! @poll, :id, :body, :category, :choice_ids, :active, :group_id
end

if @choices
  json.choices do
    @choices.each do |choice|
      json.set! choice.id do
        json.extract! choice, :id, :body, :response_ids, :responses
      end
    end
  end
end
