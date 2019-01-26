class Choice < ApplicationRecord
  validates :body, :poll_id, presence: true
  belongs_to :poll

end