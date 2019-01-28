class Response < ApplicationRecord
  validates :screen_name, :poll_id, presence: true
  belongs_to :poll
  belongs_to :choice

end
