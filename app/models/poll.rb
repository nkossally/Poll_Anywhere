class Poll < ApplicationRecord
  validates :body, :category, presence: true
  validates :category, inclusion: { in: %w(multiple_choice free_response) }
  validates :active, inclusion: { in: [true, false] }

  belongs_to :group
  has_many :choices


end
