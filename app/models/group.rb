class Group < ApplicationRecord
  validates :title, presence: true
  belongs_to :user
  has_many :polls

  def poll_ids
    self.polls.map{|poll| poll.id}
  end

end
