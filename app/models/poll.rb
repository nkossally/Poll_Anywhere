class Poll < ApplicationRecord
validates :body, :type, :active, :user_id, presence: true
validates :type, inclusion: { in: ["multiple_choice", "free_response"] }
belongs_to :user



end
