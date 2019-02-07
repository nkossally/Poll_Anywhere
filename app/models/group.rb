class Group < ApplicationRecord
  validates :title, presence: true
  belongs_to :user
  has_many :polls

end
