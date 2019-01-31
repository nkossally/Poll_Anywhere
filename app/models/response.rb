class Response < ApplicationRecord
  validates :user_id, :choice_id, presence: true
  belongs_to :user
  belongs_to :choice

end
